import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header/Header';
import { CryptoProvider } from './store/CryptoContext';
import Grid from './components/layout/Grid/Grid';

const App = () => {
  return (
    <>
      <CryptoProvider>
        <Header />
        <Grid />
      </CryptoProvider>
    </>
  );
};

export default App;
