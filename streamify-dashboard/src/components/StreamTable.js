import React, { useEffect, useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const StreamTable = () => {
  const [streams, setStreams] = useState([]);
  const [filteredStreams, setFilteredStreams] = useState([]);
  const [filters, setFilters] = useState({ artist: "", songName: "" });
  const [sortConfig, setSortConfig] = useState({
    key: "dateStreamed",
    direction: "ascending",
  });

  useEffect(() => {
    fetch("/api/streams")
      .then((response) => response.json())
      .then((data) => setStreams(data));
  }, []);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    let sortedStreams = [...streams];

    if (sortConfig.direction === "ascending") {
      sortedStreams.sort((a, b) =>
        a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
      );
    } else {
      sortedStreams.sort((a, b) =>
        a[sortConfig.key] < b[sortConfig.key] ? 1 : -1
      );
    }

    setFilteredStreams(sortedStreams);
  }, [sortConfig, streams]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    let filteredData = streams.filter(
      (stream) =>
        stream.artist.toLowerCase().includes(filters.artist.toLowerCase()) &&
        stream.songName.toLowerCase().includes(filters.songName.toLowerCase())
    );
    setFilteredStreams(filteredData);
  }, [filters, streams]);

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FaSort />;
    }
    return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          name="artist"
          placeholder="Filter by Artist"
          value={filters.artist}
          onChange={handleFilterChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="songName"
          placeholder="Filter by Song Name"
          value={filters.songName}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th
                className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                onClick={() => handleSort("songName")}
              >
                <span className="flex items-center">
                  Song Name {getSortIcon("songName")}
                </span>
              </th>
              <th
                className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                onClick={() => handleSort("artist")}
              >
                <span className="flex items-center">
                  Artist {getSortIcon("artist")}
                </span>
              </th>
              <th
                className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                onClick={() => handleSort("dateStreamed")}
              >
                <span className="flex items-center">
                  Date Streamed {getSortIcon("dateStreamed")}
                </span>
              </th>
              <th
                className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                onClick={() => handleSort("streamCount")}
              >
                <span className="flex items-center">
                  Stream Count {getSortIcon("streamCount")}
                </span>
              </th>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                User ID
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStreams.map((stream, index) => (
              <tr key={index} className="text-gray-700">
                <td className="w-1/5 py-3 px-4">{stream.songName}</td>
                <td className="w-1/5 py-3 px-4">{stream.artist}</td>
                <td className="w-1/5 py-3 px-4">{stream.dateStreamed}</td>
                <td className="w-1/5 py-3 px-4">{stream.streamCount}</td>
                <td className="w-1/5 py-3 px-4">{stream.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StreamTable;
