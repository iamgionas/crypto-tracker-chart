import React, { useContext } from 'react';
import CryptoContext from '../contexts/CryptoContext';

const Main = () => {
  const { item } = useContext(CryptoContext);

  return (
    <div className="flex-1 bg-gray-300 p-10">
      <div className="flex items-center space-x-4">
        <img className="w-9 h-9" src={item?.image} />
        <h1 className="text-2xl">{item?.name}</h1>
      </div>
    </div>
  );
};

export default Main;
