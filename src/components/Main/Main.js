import React, { useContext } from 'react';
import CryptoContext from '../../store/CryptoContext';

const Main = () => {
  const { item } = useContext(CryptoContext);

  return <main className="flex-1 bg-gray-300 p-10">{item?.symbol}</main>;
};

export default Main;
