import React from 'react';
import PercentageBox from '../Share/PercentageBox';

const Item = ({ crypto, cryptoSelected, selectCrypto }) => {
  return (
    <a
      onClick={selectCrypto.bind(null, crypto)}
      className={` ${
        crypto.id === cryptoSelected?.id
          ? 'bg-gray-100'
          : 'bg-gray-200 hover:bg-gray-100'
      } p-2  rounded border border-gray-100 cursor-pointer`}
    >
      <div className="flex items-center my-2">
        <img className="w-6 h-6 mr-2" src={crypto.image} />
        <span>
          {crypto.symbol.toUpperCase()}
          <span className="text-xs">/USD</span>
        </span>
        <PercentageBox
          className="ml-auto"
          number={crypto.market_cap_change_percentage_24h}
        />
      </div>
    </a>
  );
};

export default Item;
