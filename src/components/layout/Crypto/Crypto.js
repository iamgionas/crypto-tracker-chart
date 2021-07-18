import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chart from '../Chart/Chart';

import styles from './Crypto.module.scss';

const Crypto = () => {
  const { cryptoId } = useParams();

  return (
    <div className={styles.crypto}>
      <Link to="/">Back</Link>
      <h1>{cryptoId}</h1>
      <Chart />
    </div>
  );
};

export default Crypto;
