import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Sidebar = () => {
  return (
    <div className="bg-blue-900 w-1/6 space-y-10 py-7 px-2">
      <a
        href="#"
        className="text-white flex items-center justify-center space-x-2"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <span className="text-2x1 font-extrabold">Crypto Tracker Chart</span>
      </a>
      <Searchbar className="px-4" />
      <Navbar className="px-2 text-white" />
    </div>
  );
};

export default Sidebar;
