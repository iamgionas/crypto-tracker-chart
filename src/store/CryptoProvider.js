import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoContext from './CryptoContext';

const CryptoProvider = (props) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [query, setQuery] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const cryptoState = {
    items,
    setItems,
    item,
    setItem,
    query,
    setQuery,
  };

  useEffect(() => {
    const loadCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setItems(data);
      setItemsList(data);
    };

    loadCrypto();
  }, []);

  useEffect(() => {
    setItems(
      query
        ? itemsList.filter(
            (crypto) =>
              crypto.name.toLowerCase().includes(query.toLowerCase()) ||
              crypto.symbol.toLowerCase().includes(query.toLowerCase())
          )
        : [...itemsList]
    );
  }, [query]);

  return (
    <CryptoContext.Provider value={cryptoState}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
