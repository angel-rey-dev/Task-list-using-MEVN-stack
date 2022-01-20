import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes";

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api", taskRoutes);

export default server;
