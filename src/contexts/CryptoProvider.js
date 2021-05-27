import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoContext from './CryptoContext';

const CryptoProvider = (props) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);

  const cryptoState = {
    items,
    setItems,
    item,
    setItem,
  };

  useEffect(() => {
    const loadCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setItems(data);
    };

    loadCrypto();
  }, []);

  return (
    <CryptoContext.Provider value={cryptoState}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
