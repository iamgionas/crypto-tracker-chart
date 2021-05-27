import React from 'react';

const Searchbar = ({ className }) => {
  return (
    <div className={`${className}`}>
      <input
        className="p-2 px-3 border rounded w-full"
        placeholder="Search... "
      />
    </div>
  );
};

export default Searchbar;
