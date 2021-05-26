import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-blue-900 w-1/6 space-y-6 py-7 px-2 text-white">
      <a href="#" className="flex items-center justify-center  space-x-2 px-4">
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <span className="text-2x1 font-extrabold">Crypto Tracker Chart</span>
      </a>
      <nav></nav>
    </div>
  );
};

export default Sidebar;
