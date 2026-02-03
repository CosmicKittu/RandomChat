import express from "express";
import type { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import initIO from "./socket.js";

import cors from "cors";
import { ioCorsCofig, expressCorsCofig } from "./config/cors.js";

import passport from "passport";
import "./config/passport.js";
import { sessionMiddleware } from "./config/session.js";

import authrouter from "./modules/auth/auth.routes.js";

//////////////////////////##CODE##///////////////////////////////////

const app = express();
const server = http.createServer(app);
const io = new Server(server, ioCorsCofig);

console.log("Starting server...");
app.use(cors(expressCorsCofig));

app.use(express.json());

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authrouter);

app.get("/failure", (req: Request, res: Response) => {
  res.send("failed");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript works");
});

initIO(io);

export default server;
