import React from 'react';
import PercentageBox from '../Share/PercentageBox';

const Header = ({ crypto }) => {
  const toUSD = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);

  return (
    <header className="grid grid-rows-2 gap-y-5 justify-items-center">
      <div className="flex  space-x-5 items-center">
        <img src={crypto?.image} className="w-8 h-8" />
        <h1 className="text-3xl">{crypto.name}</h1>
        <PercentageBox number={crypto.market_cap_change_percentage_24h} />
      </div>
      <div className="grid grid-cols-3 gap-x-20">
        <div className="grid justify-items-center">
          <span>Current price</span>{' '}
          <span className="font-bold text-xl">
            {toUSD(crypto.current_price)}
          </span>
        </div>
        <div className="grid justify-items-center">
          <span>Market cap</span>{' '}
          <span className="font-bold text-xl">{toUSD(crypto.market_cap)}</span>
        </div>
        <div className="grid justify-items-center">
          <span>Volume</span>{' '}
          <span className="font-bold text-xl">
            {toUSD(crypto.total_volume)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
