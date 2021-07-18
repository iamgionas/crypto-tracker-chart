import React from 'react';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Crypto from './components/layout/Crypto/Crypto';
import { CryptoProvider } from './store/CryptoContext';
import Grid from './components/layout/Grid/Grid';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <CryptoProvider>
      <Switch>
        <Route path="/crypto/:cryptoId">
          <Crypto />
        </Route>
        <Route path="/">
          <Header />
          <Grid />
        </Route>
      </Switch>
    </CryptoProvider>
  );
};

export default App;
