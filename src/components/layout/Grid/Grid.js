import React, { useContext } from 'react';
import styles from './Grid.module.scss';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { CryptoContext } from '../../../store/CryptoContext';
import NotFound from '../NotFound/NotFound';

const Grid = () => {
  const cryptoCtx = useContext(CryptoContext);

  if (cryptoCtx.cryptos.length === 0 && cryptoCtx.query) return <NotFound />;
  else if (cryptoCtx.isLoading) return <Loading />;
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
