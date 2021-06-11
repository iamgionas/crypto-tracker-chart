import React from 'react';
import PercentageBox from '../Share/PercentageBox';
import HeaderBox from './HeaderBox';

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
        <HeaderBox label="Current price" value={toUSD(crypto.current_price)} />
        <HeaderBox label="Market cap" value={toUSD(crypto.market_cap)} />
        <HeaderBox label="Volume" value={toUSD(crypto.total_volume)} />
      </div>
    </header>
  );
};

export default Header;
