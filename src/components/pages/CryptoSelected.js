import React, { useEffect, useState, useCallback} from 'react';
import { Link, useParams } from 'react-router-dom';

import useHttp from "../../hooks/use-http";

import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Chart from '../crypto/Chart/Chart';
import Loading from '../common/Loading/Loading';

const CryptoSelected = () => {
  const { cryptoId } = useParams();
  const [data, setData] = useState([]);
  
  const processedData = useCallback((data) => {
    const {prices} = data;

    const pricesTransformed = prices.map((price, i) => {
      const dateNormalized = new Date(price[0]).toLocaleDateString("en-US")
      return {
        name: dateNormalized,
        uv: price[1]
      }
    })

    setData(pricesTransformed)
  }, []);

  const { isLoading, error, sendRequest: fetchChartData } = useHttp(processedData);

  useEffect(() => {
    fetchChartData(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=max&interval=daily`)
  }, [])

  return (
    <>
      <Header>
        <Link to="/">Back</Link> / {cryptoId}
      </Header>
      <Main>
        {isLoading ? <Loading /> : <Chart data={data}/>}
      </Main>
    </>
  );
};

export default CryptoSelected;
