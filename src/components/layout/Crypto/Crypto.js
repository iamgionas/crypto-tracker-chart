import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Crypto.module.scss';

const Crypto = () => {
  const { cryptoId } = useParams();

  return (
    <div className={styles.crypto}>
      <h1>{cryptoId}</h1>
    </div>
  );
};

export default Crypto;
