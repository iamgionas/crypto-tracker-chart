import React from 'react';
import styles from './Grid.module.scss';

const Grid = ({ cryptoList }) => {
  // TODO MAKE A ITEM COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.grid}>
      {cryptoList.map((crypto) => (
        <div
          key={crypto.id}
          style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <img src={crypto.image} width="50px" alt={crypto.id} />
          </div>
          <h1>{crypto.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Grid;
