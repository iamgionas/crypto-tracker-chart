import React from 'react';

const defaultCryptoState = {
  items: [],
  setItems: () => {},
  item: null,
  setItem: () => {},
};

export default React.createContext(defaultCryptoState);
