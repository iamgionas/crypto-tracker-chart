import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header/Header';
import CryptoProvider from './store/CryptoProvider';
import Grid from './components/layout/Grid/Grid';

const App = () => {
  return (
    <>
      <Header />
      <CryptoProvider>
        <Grid />
      </CryptoProvider>
    </>
  );
};

export default App;
