import { Severity } from '../types/incident';
import { useState, useRef, useEffect } from 'react';

interface FiltersProps {
  selectedSeverity: Severity | 'All';
  sortOrder: 'newest' | 'oldest';
  onSeverityChange: (severity: Severity | 'All') => void;
  onSortOrderChange: (order: 'newest' | 'oldest') => void;
  onSearchChange: (search: string) => void;
}

export const Filters = ({
  selectedSeverity,
  sortOrder,
  onSeverityChange,
  onSortOrderChange,
  onSearchChange,
}: FiltersProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<number>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearAll = () => {
    onSeverityChange('All');
    onSortOrderChange('newest');
    setSearchQuery('');
    onSearchChange('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = window.setTimeout(() => {
      onSearchChange(value);
    }, 300);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearchChange('');
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters Row */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search incidents..."
              className="w-full pl-10 pr-8 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 shadow-md text-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/15 transition-all duration-200"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <div className="relative">
              <select
                value={selectedSeverity}
                onChange={(e) =>
                  onSeverityChange(e.target.value as Severity | "All")
                }
                className="flex items-center appearance-none pl-10 pr-8 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 shadow-md text-white/90 hover:bg-white/15 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="All" className='bg-black text-white'>Severity: All</option>
                <option value="Low" className='bg-black text-white'>Severity: Low</option>
                <option value="Medium" className='bg-black text-white'>Severity: Medium</option>
                <option value="High" className='bg-black text-white'>Severity: High</option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) =>
                  onSortOrderChange(e.target.value as "newest" | "oldest")
                }
                className="flex items-center appearance-none pl-10 pr-8 py-2 rounded-lg bg-transparent/10 backdrop-blur-md border border-white/20 shadow-md text-white/90 hover:bg-white/15 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="newest" className='bg-black text-white'>Sort: Newest First</option>
                <option value="oldest" className='bg-black text-white'>Sort: Oldest First</option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:hidden flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 transform hover:scale-[1.02]"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-gray-300">Filters</span>
        </button>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {searchQuery && (
          <div className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Search: {searchQuery}</span>
            <button
              onClick={handleClearSearch}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        {selectedSeverity !== 'All' && (
          <div className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Severity: {selectedSeverity}</span>
            <button
              onClick={() => onSeverityChange('All')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        {sortOrder !== 'newest' && (
          <div className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-gray-300">Sort: {sortOrder === 'oldest' ? 'Oldest First' : 'Newest First'}</span>
            <button
              onClick={() => onSortOrderChange('newest')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
          <div 
            ref={modalRef}
            className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl p-6 rounded-t-xl border-t border-white/10 transform transition-transform duration-300 ease-in-out"
            style={{ transform: isModalOpen ? 'translateY(0)' : 'translateY(100%)' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Filters</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Search in Mobile Modal */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search incidents..."
                  className="w-full pl-10 pr-8 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Severity</h4>
                <select
                  value={selectedSeverity}
                  onChange={(e) => {
                    onSeverityChange(e.target.value as Severity | "All");
                    setIsModalOpen(false);
                  }}
                  className="w-full appearance-none bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/15 transition"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    WebkitAppearance: "none",
                    MozAppearance: "none"
                  }}
                >
                  <option value="All" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>All</option>
                  <option value="Low" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>Low</option>
                  <option value="Medium" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>Medium</option>
                  <option value="High" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>High</option>
                </select>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Sort Order</h4>
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    onSortOrderChange(e.target.value as "newest" | "oldest");
                    setIsModalOpen(false);
                  }}
                  className="w-full appearance-none bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/15 transition"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    WebkitAppearance: "none",
                    MozAppearance: "none"
                  }}
                >
                  <option value="newest" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>Newest First</option>
                  <option value="oldest" style={{ backgroundColor: "rgba(17, 24, 39, 0.95)", color: "rgba(255, 255, 255, 0.9)" }}>Oldest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};