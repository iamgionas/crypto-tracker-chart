import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  const [crypto, setCrypto] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setCryptos(data);
    };

    const timeoutId = setTimeout((_) => {
      if (!query) {
        loadCrypto();
      } else {
        setCryptos((cryptos) =>
          cryptos.filter(
            (crypto) =>
              crypto.name.toLowerCase().includes(query.toLowerCase().trim()) ||
              crypto.symbol.toLowerCase().includes(query.toLowerCase().trim())
          )
        );
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <CryptoContext.Provider
      value={{ cryptos, setCryptos, crypto, setCrypto, query, setQuery }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
