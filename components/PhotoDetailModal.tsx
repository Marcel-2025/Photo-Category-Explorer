import React from 'react';
import { Photo } from '../types';
import { AppIcon } from './icons/AppIcon';

interface PhotoDetailModalProps {
  photo: Photo;
  onClose: () => void;
}

// Fix: Moved the ConfidenceBar component outside of PhotoDetailModal.
// Defining components inside other components is a React anti-pattern that can lead to performance issues
// and unexpected behavior, which may include the TypeScript error regarding the 'key' prop.
const ConfidenceBar = ({ value, label }: { value: number; label: string }) => (
  <div>
      <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          <span className="text-sm font-medium text-blue-400">{`${(value * 100).toFixed(0)}%`}</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${value * 100}%` }}></div>
      </div>
  </div>
);

const PhotoDetailModal: React.FC<PhotoDetailModalProps> = ({ photo, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col md:flex-row overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 md:w-2/3 bg-black flex items-center justify-center p-4">
          <img
            src={`${photo.baseUrl}/${photo.width > photo.height ? '1280' : '1024'}/${photo.width > photo.height ? '1024' : '1280'}`}
            alt={`Detail of ${photo.id}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="md:w-1/3 w-full bg-gray-800 p-6 overflow-y-auto flex flex-col">
           <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-white">Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="space-y-4 text-sm text-gray-300">
                    <p><strong>ID:</strong> {photo.id}</p>
                    <p><strong>Type:</strong> {photo.mimeType}</p>
                    <p><strong>Dimensions:</strong> {photo.width} x {photo.height}</p>
                </div>

                {photo.classification ? (
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-white mb-4">AI Classification</h3>
                        <div className="space-y-6">
                            {photo.classification.app && (
                                <div className="flex items-center space-x-3">
                                  <AppIcon appName={photo.classification.app} className="w-8 h-8 text-white" />
                                  <div className="flex-1">
                                    <ConfidenceBar value={photo.classification.confidence.app} label="App Detected" />
                                  </div>
                                </div>
                            )}

                            {photo.classification.topics.length > 0 && (
                                <div>
                                    <h4 className="text-md font-semibold text-gray-200 mb-3">Topics</h4>
                                    <div className="space-y-4">
                                        {photo.classification.topics.map(topic => (
                                            <ConfidenceBar 
                                                key={topic}
                                                value={photo.classification!.confidence.topics[topic]}
                                                label={topic} 
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : photo.isScreenshot ? (
                    <div className="mt-8 text-center text-gray-400 p-4 border border-dashed border-gray-600 rounded-lg">
                        <p>This screenshot is pending AI classification.</p>
                    </div>
                ) : (
                    <div className="mt-8 text-center text-gray-400">
                        <p>No classification data for this item.</p>
                    </div>
                )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailModal;