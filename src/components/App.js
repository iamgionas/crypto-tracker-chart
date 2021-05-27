import React, { useEffect, useContext } from 'react';

import CryptoProvider from '../contexts/CryptoProvider';

import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  return (
    <div className="relative min-h-screen flex">
      <CryptoProvider>
        <Sidebar />
        <Main />
      </CryptoProvider>
    </div>
  );
};

export default App;
