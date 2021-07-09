import React from 'react';
import styles from './Grid.module.scss';
import Card from '../Card/Card';

const Grid = ({ cryptoList }) => {
  // TODO MAKE A ITEM COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.grid}>
      {cryptoList.map((crypto) => (
        <Card key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default Grid;
