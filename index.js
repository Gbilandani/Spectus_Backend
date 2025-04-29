// import { createServer } from "node:http";

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import express from "express";
import { database } from "./src/db/index.js";
import routes from "./src/routes/index.js";
import { PORT } from "./src/constant/index.js";

const port = PORT;
export const startServer = async () => {
  await database();
  const app = express();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  app.use(express.json());
  app.use(routes);
};

startServer();
