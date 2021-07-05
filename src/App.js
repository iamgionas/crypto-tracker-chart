import React, { useEffect, useState } from 'react';
import Index from './views/Index/Index';
import axios from 'axios';

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

  return <Index cryptoList={cryptoList} />;
};

export default App;
