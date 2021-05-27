import React, { useContext } from 'react';

import CryptoContext from '../contexts/CryptoContext';
import Item from './Item';

const Navbar = ({ className }) => {
  const cryptoList = useContext(CryptoContext);

  return (
    <nav className={`${className} flex flex-col space-y-2`}>
      {cryptoList.map((crypto) => (
        <Item crypto={crypto} key={crypto.id} />
      ))}
    </nav>
  );
};

export default Navbar;
