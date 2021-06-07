import React, { useContext } from 'react';
import CryptoContext from '../../store/CryptoContext';
import Header from './Header';

import styles from '../Share/Style.module.css';

const Main = () => {
  const { item } = useContext(CryptoContext);

  return (
    <main className="flex-1 p-10 text-white">
      <div className={`${styles.backgroundGlass} h-full p-5`}>
        {item && <Header crypto={item} />}
      </div>
    </main>
  );
};

export default Main;
