import React from 'react';
import TextField from '../../forms/TextField/TextField';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <TextField />
    </header>
  );
};

export default Header;
