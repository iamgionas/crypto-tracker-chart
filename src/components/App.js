import React, { useEffect, useContext } from 'react';

import CryptoProvider from '../store/CryptoProvider';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

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
