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
          topArtist: "Nobuo Uematsu",
        };
      });

      this.get("/streams", () => {
        return [
          {
            songName: "One-Winged Angel",
            artist: "Nobuo Uematsu",
            dateStreamed: "2024-09-01",
            streamCount: 500,
            userId: "user123",
          },
          {
            songName: "Aerith's Theme",
            artist: "Nobuo Uematsu",
            dateStreamed: "2024-09-02",
            streamCount: 600,
            userId: "user456",
          },
          {
            songName: "To Zanarkand",
            artist: "Nobuo Uematsu",
            dateStreamed: "2024-09-03",
            streamCount: 700,
            userId: "user789",
          },
          {
            songName: "Eyes on Me",
            artist: "Nobuo Uematsu",
            dateStreamed: "2024-09-04",
            streamCount: 500,
            userId: "user789",
          },
          {
            songName: "Terra's Theme",
            artist: "Nobuo Uematsu",
            dateStreamed: "2024-09-05",
            streamCount: 560,
            userId: "user789",
          },
          {
            songName: "Dragonborn",
            artist: "Jeremy Soule",
            dateStreamed: "2024-09-06",
            streamCount: 620,
            userId: "user321",
          },
          {
            songName: "Far Horizons",
            artist: "Jeremy Soule",
            dateStreamed: "2024-09-07",
            streamCount: 580,
            userId: "user654",
          },
          {
            songName: "Baba Yetu",
            artist: "Christopher Tin",
            dateStreamed: "2024-09-08",
            streamCount: 720,
            userId: "user987",
          },
          {
            songName: "Invincible",
            artist: "Two Steps From Hell",
            dateStreamed: "2024-09-09",
            streamCount: 810,
            userId: "user852",
          },
          {
            songName: "Protectors of the Earth",
            artist: "Two Steps From Hell",
            dateStreamed: "2024-09-10",
            streamCount: 690,
            userId: "user741",
          },
          {
            songName: "Journey to the Line",
            artist: "Hans Zimmer",
            dateStreamed: "2024-09-11",
            streamCount: 760,
            userId: "user963",
          },
          {
            songName: "Time",
            artist: "Hans Zimmer",
            dateStreamed: "2024-09-12",
            streamCount: 820,
            userId: "user159",
          },
        ];
      });

      this.get("/user-growth", () => {
        return [
          { month: "Jan", totalUsers: 50000, activeUsers: 35000 },
          { month: "Feb", totalUsers: 60000, activeUsers: 45000 },
          { month: "Mar", totalUsers: 63000, activeUsers: 47000 },
          { month: "Apr", totalUsers: 64000, activeUsers: 49000 },
          { month: "May", totalUsers: 68000, activeUsers: 60000 },
          { month: "Jun", totalUsers: 71000, activeUsers: 62000 },
          { month: "Jul", totalUsers: 73000, activeUsers: 65000 },
          { month: "Aug", totalUsers: 75000, activeUsers: 68000 },
          { month: "Sept", totalUsers: 80000, activeUsers: 72000 },
          { month: "Oct", totalUsers: 82000, activeUsers: 75000 },
          { month: "Nov", totalUsers: 85000, activeUsers: 77000 },
          { month: "Dec", totalUsers: 88000, activeUsers: 82000 },
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
          { name: "One-Winged Angel", artist: "Nobuo Uematsu", streams: 24000 },
          { name: "Aerith's Theme", artist: "Nobuo Uematsu", streams: 22100 },
          { name: "To Zanarkand", artist: "Nobuo Uematsu", streams: 20000 },
          { name: "Eyes on Me", artist: "Nobuo Uematsu", streams: 19800 },
          { name: "Terra's Theme", artist: "Nobuo Uematsu", streams: 18000 },
        ];
      });
    },
  });
}
