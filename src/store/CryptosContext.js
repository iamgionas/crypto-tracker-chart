import { useEffect, useState, useCallback, createContext } from "react";
import useHttp from "../hooks/use-http";

export const CryptosContext = createContext();

export const CryptosProvider = ({ children }) => {
  const applyData = useCallback((data) => {
    setCryptosLoaded(data);
    setCryptos(data);
  }, []);

  const { isLoading, error, sendRequest: fetchCryptos } = useHttp(applyData);
  const [cryptosLoaded, setCryptosLoaded] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [query, setQuery] = useState("");

  const filterCrypto = (crypto) =>
    crypto.name.toLowerCase().includes(query.toLowerCase().trim()) ||
    crypto.symbol.toLowerCase().includes(query.toLowerCase().trim());

  useEffect(() => {
    fetchCryptos(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout((_) => {
      if (query) {
        setCryptos(cryptosLoaded.filter(filterCrypto));
      } else {
        if (!isLoading && cryptosLoaded.length) setCryptos([...cryptosLoaded]);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <CryptosContext.Provider value={{ cryptos, query, setQuery, isLoading }}>
      {children}
    </CryptosContext.Provider>
  );
};
