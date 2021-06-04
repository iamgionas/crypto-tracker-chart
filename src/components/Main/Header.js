import React from 'react';

const Header = ({ crypto }) => {
  const toUSD = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);

  const getColor =
    crypto?.market_cap_change_percentage_24h.toString().charAt(0) == '-'
      ? 'bg-red-600'
      : 'bg-green-600';

  return (
    <main>
      {crypto && (
        <header className="grid grid-cols-4">
          <div className="flex  space-x-5 items-center">
            <img src={crypto?.image} className="w-8 h-8" />
            <h1 className="text-3xl">{crypto.name}</h1>
            <span
              className={`${getColor} text-xs bg-gray-500 p-1 rounded`}
            >{`${crypto.market_cap_change_percentage_24h.toFixed(2)}%`}</span>
          </div>
          <div className="grid justify-items-center">
            <span>Current price</span>{' '}
            <span class="font-bold text-xl">{toUSD(crypto.current_price)}</span>
          </div>
          <div className="grid justify-items-center">
            <span>Market cap</span>{' '}
            <span class="font-bold text-xl">{toUSD(crypto.market_cap)}</span>
          </div>
          <div className="grid justify-items-center">
            <span>Volume</span>{' '}
            <span class="font-bold text-xl">{toUSD(crypto.total_volume)}</span>
          </div>
        </header>
      )}
    </main>
  );
};

export default Header;
