import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const fetchData = async () => {
  try {
    const response = await fetch('/gadgets.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return []; 
  }
};

const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((jsonData) => {
      const chartData = jsonData.map((item) => ({
        name: item.product_title, 
        Price: item.price, 
        Total: item.price , 
      }));
      setData(chartData); 
    });
  }, []);

  return (
    <div>
             <Helmet>
        <title>Statistics - GadgetHaven</title>
        <meta name="description" content="Manage your cart and wishlist items on GadgetHaven." />

      </Helmet>
      <div className="hero items-start h-[rem] bg-[#a342f3] w-[96%] mx-auto my-14 rounded-3xl">
        <div className="hero-content text-center pt-10">
          <div>
            <h1 className="mb-5 mt-8 text-5xl font-bold text-white leading-tight">
              Statistics
            </h1>
            <p className="my-10 text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>
<div className='w-11/12 mx-auto'>
<h1 className=" ml-16 mt-8 text-4xl font-bold text-black leading-tight">
              Statistics
            </h1>
</div>
      <div className='w-8/12 bg-white mx-auto border-2 rounded-2xl p-4 border-blue-300 my-20'>
      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name"  className='text-sm w-2/12' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="Total" barSize={40} fill="#413ea0" />
            <Line type="monotone" dataKey="Rating" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div></div>
    </div>
  );
};

export default Statistics;
