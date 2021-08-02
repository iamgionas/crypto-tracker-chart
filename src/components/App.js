import React from "react";
import { CryptosProvider } from "../store/CryptosContext";
import { Route, Switch } from "react-router-dom";
import CryptosList from "./pages/CryptosList";
import CryptoSelected from "./pages/CryptoSelected";

const App = () => {
  return (
    <CryptosProvider>
      <Switch>
        <Route path="/crypto/:cryptoId">
          <CryptoSelected />
        </Route>
        <Route path="/">
          <CryptosList />
        </Route>
      </Switch>
    </CryptosProvider>
  );
};

export default App;
