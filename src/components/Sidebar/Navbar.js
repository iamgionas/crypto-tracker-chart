import React, { useContext } from 'react';

import CryptoContext from '../../store/CryptoContext';
import Item from './Item';

const Navbar = ({ className }) => {
  const { items, item, setItem } = useContext(CryptoContext);

  return (
    <nav
      className={`${className} flex flex-col space-y-2 overflow-y-scroll`}
      style={{ scrollbarColor: 'dark' }}
    >
      {items.map((crypto) => (
        <Item
          cryptoSelected={item}
          selectCrypto={setItem}
          crypto={crypto}
          key={crypto.id}
        />
      ))}
    </nav>
  );
};

export default Navbar;
