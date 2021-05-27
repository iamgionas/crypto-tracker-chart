import React from 'react';

const Item = ({ crypto }) => {
  const getColor =
    crypto.market_cap_change_percentage_24h.toString().charAt(0) == '-'
      ? 'bg-red-600'
      : 'bg-green-600';

  return (
    <a className="p-2 hover:bg-blue-800 rounded border" href="#">
      <div className="flex space-x-3 items-center my-2">
        <img className="w-5 h-5" src={crypto.image} />
        <span>{crypto.name}</span>
        <span className={`${getColor}  text-xs bg-gray-500 p-1 rounded`}>
          {`${crypto.market_cap_change_percentage_24h.toFixed(2)}%`}
        </span>
      </div>
    </a>
  );
};

export default Item;
