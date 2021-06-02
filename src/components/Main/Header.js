import React from 'react';

const Header = ({ crypto }) => {
  return (
    <header className="flex space-y-5 justify-between items-center">
      <div className="flex  space-x-5 items-center">
        <img src={crypto?.image} className="w-8 h-8" />
        <h1 className="text-3xl">{crypto?.name}</h1>
      </div>
      <div>Current price: ${crypto?.current_price}</div>
      <div>Market cap: ${crypto?.market_cap}</div>
      <div>Volume: ${crypto?.total_volume}</div>
    </header>
  );
};

export default Header;
