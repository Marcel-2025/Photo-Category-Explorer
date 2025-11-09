
import { useState, useEffect, useCallback } from 'react';
import { Photo, Classification } from '../types';
import { mockFetchPhotos } from '../services/photoService';
import { mockClassifyImage } from '../services/geminiService';

export const usePhotos = (isAuthenticated: boolean) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState(0);
  const [classifiedCount, setClassifiedCount] = useState(0);

  const classifyPhotos = useCallback(async (photosToClassify: Photo[]) => {
    const classificationPromises = photosToClassify
      .filter(p => p.isScreenshot && !p.classification)
      .map(async (photo) => {
        try {
          const classification = await mockClassifyImage(photo.id);
          return { photoId: photo.id, classification };
        } catch (error) {
          console.error(`Failed to classify ${photo.id}`, error);
          return null;
        }
      });
      
    const results = await Promise.all(classificationPromises);

    setPhotos(prevPhotos => {
      const newPhotos = [...prevPhotos];
      let newClassifiedCount = classifiedCount;
      results.forEach(result => {
        if (result) {
          const index = newPhotos.findIndex(p => p.id === result.photoId);
          if (index !== -1) {
            newPhotos[index] = { ...newPhotos[index], classification: result.classification };
            newClassifiedCount++;
          }
        }
      });
      setClassifiedCount(newClassifiedCount);
      return newPhotos;
    });

  }, [classifiedCount]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const loadPhotos = async () => {
      setIsLoading(true);
      try {
        const fetchedPhotos = await mockFetchPhotos(200);
        setPhotos(fetchedPhotos);
        setTotalCount(fetchedPhotos.length);
        setClassifiedCount(0);
        
        // Simulate background classification
        setTimeout(() => classifyPhotos(fetchedPhotos), 500);

      } catch (error) {
        console.error("Failed to fetch photos", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return { photos, isLoading, totalCount, classifiedCount };
};
