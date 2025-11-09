
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PhotoGrid from './components/PhotoGrid';
import Login from './components/Login';
import PhotoDetailModal from './components/PhotoDetailModal';
import { usePhotos } from './hooks/usePhotos';
import { Photo, FilterState } from './types';
import { INITIAL_FILTER_STATE } from './constants';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const { photos, isLoading, totalCount, classifiedCount } = usePhotos(isAuthenticated);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTER_STATE);
  }, []);

  const handlePhotoClick = useCallback((photo: Photo) => {
    setSelectedPhoto(photo);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo => {
      if (filters.searchTerm && !photo.id.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      if (filters.type !== 'all' && photo.mimeType.split('/')[0] !== filters.type) {
        return false;
      }
      if (filters.app !== 'all' && (!photo.classification || photo.classification.app !== filters.app)) {
        return false;
      }
      if (filters.isScreenshot !== null && photo.isScreenshot !== filters.isScreenshot) {
        return false;
      }
      return true;
    });
  }, [photos, filters]);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        resetFilters={resetFilters}
        classifiedCount={classifiedCount}
        totalCount={totalCount}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header filters={filters} onFilterChange={handleFilterChange} />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <PhotoGrid 
            photos={filteredPhotos} 
            isLoading={isLoading}
            onPhotoClick={handlePhotoClick}
          />
        </div>
      </main>
      {selectedPhoto && (
        <PhotoDetailModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
}
