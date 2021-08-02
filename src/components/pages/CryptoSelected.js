import React, { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Chart from '../crypto/Chart/Chart';

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
