
import { Photo } from '../types';

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const mockFetchPhotos = (count: number): Promise<Photo[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const photos: Photo[] = Array.from({ length: count }, (_, i) => {
        const isScreenshot = Math.random() > 0.6;
        const width = isScreenshot ? 1080 : randomInt(800, 4000);
        const height = isScreenshot ? 2400 : randomInt(600, 3000);
        const mimeType = Math.random() > 0.95 ? 'video/mp4' : 'image/jpeg';
        
        return {
          id: `photo_${i + 1}`,
          baseUrl: `https://picsum.photos/seed/${i+1}`,
          mimeType: mimeType,
          isScreenshot: isScreenshot,
          width,
          height,
        };
      });
      resolve(photos);
    }, 1500);
  });
};
