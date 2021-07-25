import React from 'react';
import Header from '../layout/Header/Header';
import TextField from '../layout/TextField/TextField';
import Main from '../layout/Main/Main';
import Grid from '../layout/Grid/Grid';

const CryptosList = () => {
  return (
    <>
      <Header>
        <TextField />
      </Header>
      <Main>
        <Grid />
      </Main>
    </>
  );
};

export default CryptosList;
