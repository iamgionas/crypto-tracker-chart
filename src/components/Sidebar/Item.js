import React from 'react';
import PercentageBox from '../Share/PercentageBox';

const Item = ({ crypto, cryptoSelected, selectCrypto }) => {
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
          <span className="text-xs ">/USD</span>
        </span>
        <PercentageBox number={crypto.market_cap_change_percentage_24h} />
      </div>
    </a>
  );
};

export default Item;
