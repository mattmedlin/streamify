import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { month, totalUsers, activeUsers } = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border dark:border-green-400 rounded shadow-sm">
        <p className="font-bold">{`${month}`}</p>
        <p>{`Total Users: ${totalUsers}`}</p>
        <p>{`Active Users: ${activeUsers}`}</p>
      </div>
    );
  }

  return null;
};

const UserGrowthChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/user-growth")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
