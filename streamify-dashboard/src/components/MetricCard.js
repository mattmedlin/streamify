import React from "react";

const MetricCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <div className="text-blue-500 mr-4">{icon}</div>
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default MetricCard;
