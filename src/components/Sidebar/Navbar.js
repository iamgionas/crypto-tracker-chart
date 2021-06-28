import React, { useContext } from 'react';

import CryptoContext from '../../store/CryptoContext';
import Item from './Item';

const Navbar = ({ className }) => {
  const { items, item, setItem } = useContext(CryptoContext);

  return items.length == 0 ? (
    <div class="flex justify-center">
      <div class="inline-block animate-spin rounded-md ease duration-300 w-5 h-5 bg-white mx-2"></div>
    </div>
  ) : (
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
