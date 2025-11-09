// FIX: Implemented the full content for the App component to resolve module errors.
import React, { useState, useCallback } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import PhotoDetailModal from './components/PhotoDetailModal';
import { usePhotos } from './hooks/usePhotos';
import { Photo, FilterState } from './types';
import { INITIAL_FILTER_STATE } from './constants';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { photos, isLoading, totalCount, classifiedCount } = usePhotos(isAuthenticated);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTER_STATE);
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        totalCount={totalCount}
        classifiedCount={classifiedCount}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          filters={filters}
          onFilterChange={handleFilterChange}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">
          <PhotoGrid 
            photos={photos}
            filters={filters}
            onPhotoClick={setSelectedPhoto}
            isLoading={isLoading}
          />
        </main>
      </div>
      {selectedPhoto && (
        <PhotoDetailModal 
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}

export default App;
