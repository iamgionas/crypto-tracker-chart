import React from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const data = [
  { uv: 400, pv: 2400, amt: 2400 },
  { uv: 100, pv: 2400, amt: 2400 },
  { uv: 200, pv: 2400, amt: 2400 },
  { uv: 250, pv: 2400, amt: 2400 },
  { uv: 200, pv: 2400, amt: 2400 },
  { uv: 300, pv: 2400, amt: 2400 },
];

const Chart = () => {
  return (
    <ResponsiveContainer
      className="my-10 text-white rounded"
      width="100%"
      height="65%"
    >
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#000000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" tick={{ fill: 'black' }} stroke="black" />
        <YAxis tick={{ fill: 'black' }} stroke="black" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
