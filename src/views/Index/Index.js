import React from 'react';
import Header from '../../components/layout/Header/Header';
import styles from './Index.module.scss';

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>Lista</div>
    </div>
  );
};

export default Index;
