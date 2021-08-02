import styles from './Grid.module.scss';

import { useContext } from 'react';
import { CryptosContext } from '../../../store/CryptosContext';


import Card from '../../crypto/Card/Card';
import Loading from '../../common/Loading/Loading';
import NotFound from '../../common/NotFound/NotFound';

const Grid = () => {
  const cryptoCtx = useContext(CryptosContext);

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
