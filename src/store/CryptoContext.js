import { useEffect, useState, createContext } from 'react';
import useHttp from '../hooks/use-http';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const applyData = (data) => {
    setCryptosLoaded(data);
    setCryptos(data);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchCryptos,
  } = useHttp(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    applyData
  );

  const [cryptosLoaded, setCryptosLoaded] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [crypto, setCrypto] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchCryptos();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout((_) => {
      if (query) {
        setCryptos(
          cryptosLoaded.filter(
            (crypto) =>
              crypto.name.toLowerCase().includes(query.toLowerCase().trim()) ||
              crypto.symbol.toLowerCase().includes(query.toLowerCase().trim())
          )
        );
      } else {
        if (!isLoading && cryptosLoaded.length) setCryptos([...cryptosLoaded]);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <CryptoContext.Provider
      value={{ cryptos, crypto, setCrypto, query, setQuery, isLoading }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
