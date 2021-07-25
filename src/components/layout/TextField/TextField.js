import React, { useContext } from 'react';
import styles from './TextField.module.scss';
import { CryptoContext } from '../../../store/CryptoContext';

const TextField = () => {
  const cryptoCtx = useContext(CryptoContext);

  return (
    <input
      type="text"
      value={cryptoCtx.query}
      placeholder="Find your preferred crypto..."
      onChange={(e) => cryptoCtx.setQuery(e.target.value)}
      className={styles.input}
    />
  );
};

export default TextField;
