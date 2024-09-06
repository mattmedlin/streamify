import React, { useEffect, useState } from "react";
import MetricCard from "../components/MetricCard";
import { FaUser, FaStream, FaDollarSign, FaMusic } from "react-icons/fa";
import UserGrowthChart from "../components/UserGrowthChart";
import RevenueDistributionChart from "../components/RevenueDistributionChart";
import TopStreamedSongsChart from "../components/TopStreamedSongsChart";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch("/api/metrics")
      .then((response) => response.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Streamify</h1>
      {/* Metrics */}
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MetricCard
            title="Total Users"
            value={metrics.totalUsers}
            icon={<FaUser size={30} />}
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MetricCard
            title="Active Users"
            value={metrics.activeUsers}
            icon={<FaUser size={30} />}
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MetricCard
            title="Total Streams"
            value={metrics.totalStreams}
            icon={<FaStream size={30} />}
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MetricCard
            title="Revenue"
            value={`$${metrics.revenue}`}
            icon={<FaDollarSign size={30} />}
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <MetricCard
            title="Top Artist"
            value={metrics.topArtist}
            icon={<FaMusic size={30} />}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">User Growth</h3>
        <UserGrowthChart />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Revenue Distribution</h3>
        <RevenueDistributionChart />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Top 5 Streamed Songs</h3>
        <TopStreamedSongsChart />
      </div>
    </div>
  );
};

export default Dashboard;
