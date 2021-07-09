import React from 'react';
import styles from './Card.module.scss';

const Item = ({ crypto }) => {
  // TODO MAKE A ITEM COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={crypto.image} width="50px" alt={crypto.id} />
      </div>
      <div className={styles.card__content}>
        <h1>{crypto.name}</h1>
        <p>Current price: {crypto.current_price}</p>
        <p>Total volume: {crypto.total_volume}</p>
        <p>Price change 24h: {crypto.price_change_percentage_24h}</p>
      </div>
    </div>
  );
};

export default Item;
