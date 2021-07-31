import React from 'react';
import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Chart from '../layout/Chart/Chart';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const CryptoSelected = () => {
  const { cryptoId } = useParams();

  useEffect(() => {}, [cryptoId]);

  return (
    <>
      <Header>
        <Link to="/">Back</Link> / {cryptoId}
      </Header>
      <Main>
        <Chart />
      </Main>
    </>
  );
};

export default CryptoSelected;
