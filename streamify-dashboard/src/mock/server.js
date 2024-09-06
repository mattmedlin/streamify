import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/metrics", () => {
        return {
          totalUsers: 100000,
          activeUsers: 75000,
          totalStreams: 500000,
          revenue: 1250000,
          topArtist: "Artist Name",
        };
      });

      this.get("/streams", () => {
        return [
          {
            songName: "Song 1",
            artist: "Artist 1",
            dateStreamed: "2024-09-01",
            streamCount: 500,
            userId: "user123",
          },
          {
            songName: "Song 2",
            artist: "Artist 2",
            dateStreamed: "2024-09-02",
            streamCount: 600,
            userId: "user456",
          },
          {
            songName: "Song 3",
            artist: "Artist 3",
            dateStreamed: "2024-09-03",
            streamCount: 700,
            userId: "user789",
          },
          {
            songName: "Song 4",
            artist: "Artist 4",
            dateStreamed: "2024-09-04",
            streamCount: 500,
            userId: "user789",
          },
          {
            songName: "Song 5",
            artist: "Artist 5",
            dateStreamed: "2024-09-05",
            streamCount: 560,
            userId: "user789",
          },
        ];
      });

      this.get("/user-growth", () => {
        return [
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
      });

      this.get("/revenue-distribution", () => {
        return [
          { name: "Subscriptions", value: 700000 },
          { name: "Ads", value: 550000 },
        ];
      });

      this.get("/top-streamed-songs", () => {
        return [
          { name: "Song 1", streams: 24000 },
          { name: "Song 2", streams: 22100 },
          { name: "Song 3", streams: 20000 },
          { name: "Song 4", streams: 19800 },
          { name: "Song 5", streams: 18000 },
        ];
      });
    },
  });
}
