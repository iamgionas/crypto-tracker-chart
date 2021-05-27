import React, { useContext } from 'react';

import CryptoContext from '../contexts/CryptoContext';

const Navbar = ({ className }) => {
  const cryptoList = useContext(CryptoContext);

  return (
    <nav className={`${className} flex flex-col space-y-2`}>
      {cryptoList.map((crypto) => {
        console.log(crypto);
        return (
          <a
            className="p-2 hover:bg-blue-800 flex space-x-3 items-center rounded"
            href="#"
            key={crypto.id}
          >
            <img className="w-5 h-5" src={crypto.image} />
            <span>{crypto.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
