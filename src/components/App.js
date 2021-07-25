import React from 'react';
import { CryptoProvider } from '../store/CryptoContext';
import { Route, Switch } from 'react-router-dom';
import CryptosList from './pages/CryptosList';
import CryptoSelected from './pages/CryptoSelected';

const App = () => {
  return (
    <CryptoProvider>
      <Switch>
        <Route path="/crypto/:cryptoId">
          <CryptoSelected />
        </Route>
        <Route path="/">
          <CryptosList />
        </Route>
      </Switch>
    </CryptoProvider>
  );
};

export default App;
