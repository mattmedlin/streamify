import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#FFBB28"];

const RevenueDistributionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/revenue-distribution")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const renderLabel = (entry) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const percentage = ((entry.value / total) * 100).toFixed(2);
    return `${percentage}%`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="label">{`${name}: $${value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueDistributionChart;
