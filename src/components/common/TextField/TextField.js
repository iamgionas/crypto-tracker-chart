import styles from './TextField.module.scss';

import { useContext } from 'react';
import { CryptosContext } from '../../../store/CryptosContext';

const TextField = () => {
  const cryptoCtx = useContext(CryptosContext);

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
