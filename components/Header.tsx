import React from 'react';
import { FilterState } from '../types';
import { MenuIcon } from './icons/icons';

interface HeaderProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ filters, onFilterChange, onToggleSidebar }) => {
  return (
    <header className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-3 md:px-6 flex items-center justify-between z-10">
      <div className="flex items-center flex-1">
        <button 
          onClick={onToggleSidebar} 
          className="md:hidden text-gray-400 hover:text-white mr-4 p-1 rounded-full hover:bg-gray-700"
          aria-label="Open navigation"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="relative flex-1 max-w-xl">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search by ID..."
            value={filters.searchTerm}
            onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-4">
        <div>
          <select 
            value={filters.type}
            onChange={(e) => onFilterChange({ type: e.target.value as 'all' | 'image' | 'video' })}
            className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;