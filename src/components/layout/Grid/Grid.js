import React, { useContext } from 'react';
import styles from './Grid.module.scss';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { CryptoContext } from '../../../store/CryptoContext';

const Grid = () => {
  const cryptoCtx = useContext(CryptoContext);

  if (cryptoCtx.cryptos.length === 0 && cryptoCtx.query)
    return 'No crypto founded!';
  else if (cryptoCtx.cryptos.length === 0) return <Loading />;
  else
    return (
      <div className={styles.grid}>
        {cryptoCtx.cryptos.map((crypto) => (
          <Card key={crypto.id} crypto={crypto} />
        ))}
      </div>
    );
};

export default Grid;
