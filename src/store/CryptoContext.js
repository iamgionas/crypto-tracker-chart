import React from 'react';

const defaultCryptoState = {
  items: [],
  setItems: () => {},
  item: null,
  setItem: () => {},
  query: null,
  setQuery: () => {},
};

export default React.createContext(defaultCryptoState);
