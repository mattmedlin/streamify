import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Song 1", streams: 24000 },
  { name: "Song 2", streams: 22100 },
  { name: "Song 3", streams: 20000 },
  { name: "Song 4", streams: 19800 },
  { name: "Song 5", streams: 18000 },
];

const TopStreamedSongsChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="streams" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongsChart;
