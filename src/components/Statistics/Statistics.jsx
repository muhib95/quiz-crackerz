import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis,  Tooltip}from 'recharts';
const Statistics = () => {
  const datas=useLoaderData();
  const {data}=datas;

  return (
    <div className='flex justify-center mt-4 overflow-x-scroll md:overflow-hidden'>
      <LineChart width={500} height={400}me='w-32 h-60'  data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;