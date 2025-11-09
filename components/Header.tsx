// FIX: Implemented the Header component to resolve module errors.
import React from 'react';
import { FilterState } from '../types';
import { SearchIcon, MenuIcon } from './icons/icons';

interface HeaderProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ filters, onFilterChange, onMenuClick }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="md:hidden mr-4 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              aria-label="Open sidebar"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="relative text-gray-400 focus-within:text-gray-200">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5" />
              </span>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 bg-gray-700 py-2 pl-10 pr-3 text-white placeholder:text-gray-400 focus:bg-white/10 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search by topic..."
                value={filters.searchTerm}
                onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
             {/* Future actions can go here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
