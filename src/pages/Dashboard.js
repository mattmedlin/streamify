import React, { useEffect, useState, Suspense } from "react";
import MetricCard from "../components/MetricCard";
import { FaUser, FaStream, FaDollarSign, FaMusic } from "react-icons/fa";
import Spinner from "../components/Spinner";

const StreamTable = React.lazy(() => import("../components/StreamTable"));

const UserGrowthChart = React.lazy(() =>
  import("../components/UserGrowthChart")
);
const RevenueDistributionChart = React.lazy(() =>
  import("../components/RevenueDistributionChart")
);
const TopStreamedSongsChart = React.lazy(() =>
  import("../components/TopStreamedSongsChart")
);

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch("/api/metrics")
      .then((response) => response.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div className="p-6">
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
            title="Top Artist (30 days)"
            value={metrics.topArtist}
            icon={<FaMusic size={30} />}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="flex gap-1 w-full">
        <div className="mt-8 w-1/3">
          <h3 className="text-xl font-bold mb-4 flex gap-2">
            User Growth{" "}
            <h4 className="text-gray-500 font-normal text-sm pt-1">(year)</h4>
          </h3>
          <Suspense fallback={<Spinner />}>
            <UserGrowthChart />
          </Suspense>
        </div>

        <div className="mt-8 w-1/3">
          <h3 className="text-xl font-bold mb-4">Revenue Distribution</h3>
          <Suspense fallback={<Spinner />}>
            <RevenueDistributionChart />
          </Suspense>
        </div>

        <div className="mt-8 w-1/3">
          <h3 className="text-xl font-bold mb-4 flex gap-2">
            Top 5 Streamed Songs{" "}
            <h4 className="text-gray-500 font-normal text-sm pt-1">
              (30 days)
            </h4>
          </h3>
          <Suspense fallback={<Spinner />}>
            <TopStreamedSongsChart />
          </Suspense>
        </div>
      </div>

      {/* Streams */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Streams</h3>
        <Suspense fallback={<Spinner />}>
          <StreamTable />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
