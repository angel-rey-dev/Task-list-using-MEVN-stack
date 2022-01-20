import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes";

const server = express();
server.use(cors( 
    {
        origin: "https://cool-task-list.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));
server.use(morgan("dev"));
server.use(express.json());

server.use("/api", taskRoutes);

export default server;
