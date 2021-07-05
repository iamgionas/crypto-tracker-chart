import React from 'react';
import Header from '../../components/layout/Header/Header';
import Grid from '../../components/layout/Grid/Grid';
import styles from './Index.module.scss';

const Index = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Grid cryptoList={props.cryptoList} />
    </div>
  );
};

export default Index;
