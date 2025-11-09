import React from 'react';
import { FilterState } from '../types';
import { APP_CATEGORIES } from '../constants';
import { AppIcon } from './icons/AppIcon';
import { XIcon } from './icons/icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  resetFilters: () => void;
  totalCount: number;
  classifiedCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, filters, onFilterChange, resetFilters, totalCount, classifiedCount }) => {
  const classificationProgress = totalCount > 0 ? (classifiedCount / totalCount) * 100 : 0;
  
  const FilterButton = ({ onClick, text, isActive }: { onClick: () => void; text: string; isActive: boolean}) => (
    <button
      onClick={() => {
        onClick();
        onClose();
      }}
      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {text}
    </button>
  );
  
  return (
    <aside className={`w-64 flex-shrink-0 bg-gray-800 p-4 flex flex-col space-y-6 overflow-y-auto 
      fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out 
      md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div>
        <div className="flex items-center justify-between space-x-3 mb-4 px-2">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <h1 className="text-xl font-bold text-white">Photo Explorer</h1>
            </div>
            <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700" aria-label="Close navigation">
              <XIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="px-2 mt-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">AI Classification</h3>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${classificationProgress}%`, transition: 'width 0.5s ease-in-out' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">{classifiedCount} / {totalCount} items classified</p>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col space-y-4">
        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick Filters</h3>
          <div className="space-y-1">
            <FilterButton onClick={resetFilters} text="All Media" isActive={filters.isScreenshot === null && filters.app === 'all'} />
            <FilterButton onClick={() => onFilterChange({ isScreenshot: true, app: 'all' })} text="All Screenshots" isActive={filters.isScreenshot === true && filters.app === 'all'} />
            <FilterButton onClick={() => onFilterChange({ isScreenshot: false, app: 'all' })} text="Photos & Videos" isActive={filters.isScreenshot === false} />
          </div>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Screenshots by App</h3>
          <div className="space-y-1">
            {APP_CATEGORIES.map(app => (
              <button
                key={app}
                onClick={() => {
                  onFilterChange({ isScreenshot: true, app });
                  onClose();
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-3 transition-colors ${
                  filters.app === app && filters.isScreenshot === true ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <AppIcon appName={app} className="w-5 h-5" />
                <span>{app}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;