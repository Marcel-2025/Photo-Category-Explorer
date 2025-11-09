// FIX: Implemented the PhotoGrid component to resolve module errors.
import React from 'react';
import { Photo, FilterState } from '../types';
import PhotoThumbnail from './PhotoThumbnail';
import { SearchIcon } from './icons/icons';

interface PhotoGridProps {
  photos: Photo[];
  filters: FilterState;
  onPhotoClick: (photo: Photo) => void;
  isLoading: boolean;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, filters, onPhotoClick, isLoading }) => {
  const filteredPhotos = photos.filter(photo => {
    // Screenshot filter
    if (filters.isScreenshot !== null && photo.isScreenshot !== filters.isScreenshot) {
      return false;
    }
    
    // App filter (only applies to screenshots)
    if (filters.app !== 'all' && (!photo.classification || photo.classification.app !== filters.app)) {
      return false;
    }

    // Search term filter (checks topics)
    if (filters.searchTerm) {
      const searchTermLower = filters.searchTerm.toLowerCase();
      const hasTopic = photo.classification?.topics.some(topic =>
        topic.toLowerCase().includes(searchTermLower)
      );
      if (!hasTopic) return false;
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 p-4">
        {Array.from({ length: 28 }).map((_, index) => (
          <div key={index} className="aspect-square bg-gray-800 rounded-md animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (filteredPhotos.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 p-8">
            <SearchIcon className="w-16 h-16 mb-4 text-gray-500" />
            <h3 className="text-xl font-semibold text-white">No Results Found</h3>
            <p className="mt-2 max-w-md">Try adjusting your filters or search term to find what you're looking for.</p>
        </div>
    )
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 p-4">
      {filteredPhotos.map(photo => (
        <PhotoThumbnail key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </div>
  );
};

export default PhotoGrid;
