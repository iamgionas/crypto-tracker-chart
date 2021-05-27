import React, { useContext } from 'react';
import CryptoContext from '../contexts/CryptoContext';

const Searchbar = ({ className }) => {
  const { query, setQuery } = useContext(CryptoContext);

  return (
    <div className={`${className}`}>
      <input
        className="p-2 px-3 border rounded w-full"
        placeholder="Search... "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
