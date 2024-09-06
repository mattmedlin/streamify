import React, { useEffect, useState } from "react";

const StreamTable = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    fetch("/api/streams")
      .then((response) => response.json())
      .then((data) => setStreams(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
              Song Name
            </th>
            <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
              Artist
            </th>
            <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
              Date Streamed
            </th>
            <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
              Stream Count
            </th>
            <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
              User ID
            </th>
          </tr>
        </thead>
        <tbody>
          {streams.map((stream, index) => (
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
  );
};

export default StreamTable;
