import React from 'react';

const Navbar = ({ className }) => {
  return (
    <div className={`${className} px-4`}>
      <input
        className="p-2 px-3 border rounded w-full"
        placeholder="Search... "
      />
    </div>
  );
};

export default Navbar;
