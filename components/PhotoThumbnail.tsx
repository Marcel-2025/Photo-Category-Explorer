
import React, { useState, useEffect, useRef } from 'react';
import { Photo } from '../types';
import { AppIcon } from './icons/AppIcon';

interface PhotoThumbnailProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

const PhotoThumbnail: React.FC<PhotoThumbnailProps> = ({ photo, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);

  const isVideo = photo.mimeType.startsWith('video');

  return (
    <div
      ref={placeholderRef}
      className="aspect-square bg-gray-800 rounded-md overflow-hidden cursor-pointer group relative"
      onClick={() => onClick(photo)}
    >
      {isVisible ? (
        <img
          src={`${photo.baseUrl}/${photo.width > photo.height ? '400' : '300'}/${photo.width > photo.height ? '300' : '400'}`}
          alt={`Photo ${photo.id}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
         <div className="w-full h-full bg-gray-700"></div>
      )}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {isVideo && (
        <div className="absolute bottom-2 right-2 bg-black/50 rounded p-1">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 5.555a1 1 0 00-1.9 1.11l1.4 3.111-2.056.914A1 1 0 006 12.055v.445a1 1 0 001.555.832l3-1.5a1 1 0 000-1.664l-3-1.5z" clipRule="evenodd"></path></svg>
        </div>
      )}
      
      {photo.classification?.app && (
        <div className="absolute top-2 left-2 bg-black/50 rounded-full p-1.5">
          <AppIcon appName={photo.classification.app} className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default PhotoThumbnail;
