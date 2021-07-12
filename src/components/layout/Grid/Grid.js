import React, { useContext } from 'react';
import styles from './Grid.module.scss';
import Card from '../Card/Card';
import CryptoContext from '../../../store/crypto-context';

const Grid = ({ cryptoList }) => {
  const crpytoCtx = useContext(CryptoContext);
  console.log(crpytoCtx);

  return (
    <div className={styles.grid}>
      {crpytoCtx.cryptos.map((crypto) => (
        <Card key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default Grid;
