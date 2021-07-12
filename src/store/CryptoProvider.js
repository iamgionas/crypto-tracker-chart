import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoContext from './crypto-context';
import Loading from '../components/layout/Loading/Loading';

const CryptoProvider = (props) => {
  const [cryptos, setCryptos] = useState([]);
  const [cryptoSelected, setCryptoSelected] = useState(null);

  useEffect(() => {
    const loadCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setCryptos(data);
    };

    loadCrypto();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptos, cryptoSelected }}>
      {cryptos.length > 1 && props.children}
      {cryptos.length == 0 && <Loading />}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
