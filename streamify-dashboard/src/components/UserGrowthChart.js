import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "January", totalUsers: 50000, activeUsers: 35000 },
  { month: "February", totalUsers: 60000, activeUsers: 45000 },
  { month: "March", totalUsers: 63000, activeUsers: 47000 },
  { month: "April", totalUsers: 64000, activeUsers: 49000 },
  { month: "May", totalUsers: 68000, activeUsers: 60000 },
  { month: "June", totalUsers: 71000, activeUsers: 62000 },
  { month: "July", totalUsers: 73000, activeUsers: 65000 },
  { month: "August", totalUsers: 75000, activeUsers: 68000 },
  { month: "September", totalUsers: 80000, activeUsers: 72000 },
  { month: "October", totalUsers: 82000, activeUsers: 75000 },
  { month: "November", totalUsers: 85000, activeUsers: 77000 },
  { month: "December", totalUsers: 88000, activeUsers: 82000 },
];

const UserGrowthChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
