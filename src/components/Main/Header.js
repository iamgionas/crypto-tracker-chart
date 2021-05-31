import React from 'react';

const Header = ({ crypto }) => {
  return (
    <header>
      <div className="flex space-x-5 items-center">
        <img src={crypto?.image} className="w-8 h-8" />
        <h1 className="text-3xl">{crypto?.name}</h1>
      </div>
    </header>
  );
};

export default Header;
