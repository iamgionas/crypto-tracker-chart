import React from 'react';
import styles from './Card.module.scss';
import Chip from '../Chip/Chip';
import { Link } from 'react-router-dom';

const Item = ({ crypto }) => {
  const toCurrency = (number) => {
    return new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  };

  const background =
    crypto.price_change_percentage_24h > 0 ? '#5EFC8D' : '#d63230';
  const color = crypto.price_change_percentage_24h > 0 ? '#000' : '#fff';

  return (
    <Link to={`/crypto/${crypto.id}`} className={styles.card}>
      <div className={styles.card__img}>
        <img src={crypto.image} width="50px" alt={crypto.id} />
        <h4>{crypto.symbol.toUpperCase()}</h4>
      </div>
      <div className={styles.card__content}>
        <h1>{crypto.name}</h1>
        <Chip label="Price" value={toCurrency(crypto.current_price)} />
        <Chip label="Mkt cap" value={toCurrency(crypto.market_cap)} />
      </div>
      <div className={styles.card__percentage} style={{ background, color }}>
        {`${crypto.price_change_percentage_24h.toFixed(2)}%`}
      </div>
    </Link>
  );
};

export default Item;
