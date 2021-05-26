import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
