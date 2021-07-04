import React from 'react';
import styles from './TextField.module.scss';

const TextField = () => {
  return (
    <input placeholder="Find your preferred crypto" className={styles.input} />
  );
};

export default TextField;
