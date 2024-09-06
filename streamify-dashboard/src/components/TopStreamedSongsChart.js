import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const truncate = (str, maxLength) => {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, artist, streams } = payload[0].payload;
    return (
      <div className="bg-white p-2 border rounded shadow-sm">
        <p className="label">{`${name} by ${artist}`}</p>
        <p className="intro">{`Streams: ${streams}`}</p>
      </div>
    );
  }

  return null;
};

const TopStreamedSongsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/top-streamed-songs")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tickFormatter={(name) => truncate(name, 10)} // Truncate for x-axis
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="streams" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongsChart;
