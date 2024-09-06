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
    },
  });
}
