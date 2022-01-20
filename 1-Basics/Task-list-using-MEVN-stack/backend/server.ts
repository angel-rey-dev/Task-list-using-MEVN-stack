import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes";

const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cool-task-list.vercel.app/');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use("/api", taskRoutes);

export default server;
