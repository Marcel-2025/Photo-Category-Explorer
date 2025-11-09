
import React from 'react';
import { Photo } from '../types';
import PhotoThumbnail from './PhotoThumbnail';

interface PhotoGridProps {
  photos: Photo[];
  isLoading: boolean;
  onPhotoClick: (photo: Photo) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, isLoading, onPhotoClick }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 md:gap-4 animate-pulse">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="aspect-square bg-gray-700 rounded-md"></div>
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="text-xl">No photos found</p>
        <p>Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 md:gap-4">
      {photos.map(photo => (
        <PhotoThumbnail key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </div>
  );
};

export default PhotoGrid;
