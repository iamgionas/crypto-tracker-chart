import React from 'react';

const CryptoContext = React.createContext({
  cryptos: [],
  cryptoSelected: {},
});

export default CryptoContext;
