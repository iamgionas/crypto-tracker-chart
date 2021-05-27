import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CryptoContext from '../contexts/CryptoContext';

import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const loadCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setCryptoList(data);
    };

    loadCrypto();
  }, []);

  return (
    <div className="relative min-h-screen flex">
      <CryptoContext.Provider value={cryptoList}>
        <Sidebar />
        <Main />
      </CryptoContext.Provider>
    </div>
  );
};

export default App;
