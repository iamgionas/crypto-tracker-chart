import React from 'react';
import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import TextField from '../layout/TextField/TextField';
import Grid from '../layout/Grid/Grid';

const CryptoSelected = () => {
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

export default CryptoSelected;
