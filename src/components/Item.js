import React from 'react';

const Item = ({ crypto, cryptoSelected, selectCrypto }) => {
  const getColor =
    crypto.market_cap_change_percentage_24h.toString().charAt(0) == '-'
      ? 'bg-red-600'
      : 'bg-green-600';

  return (
    <a
      onClick={selectCrypto.bind(null, crypto)}
      className={`${
        crypto.id === cryptoSelected?.id ? 'bg-blue-400' : 'hover:bg-blue-800'
      } p-2  rounded border cursor-pointer`}
    >
      <div className="flex space-x-3 items-center my-2">
        <img className="w-6 h-6" src={crypto.image} />
        <span>
          {crypto.symbol.toUpperCase()}
          <span className="text-xs">/USD</span>
        </span>
        <span className={`${getColor}  text-xs bg-gray-500 p-1 rounded`}>
          {`${crypto.market_cap_change_percentage_24h.toFixed(2)}%`}
        </span>
      </div>
    </a>
  );
};

export default Item;
