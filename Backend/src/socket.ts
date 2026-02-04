import { sessionMiddleware } from "./config/session.js";
import passport from "passport";
import { Server, Socket } from "socket.io";
import { IncomingMessage } from "http";

// This tells TypeScript that 'req.user' and 'socket.user' exist
declare module "http" {
  interface IncomingMessage {
    user?: any;
    session?: any;
  }
}

declare module "socket.io" {
  interface Socket {
    user?: any;
  }
}

let waitingUser: Socket | null = null;

const wrap =
  (middleware: any) => (socket: Socket, next: (err?: Error) => void) =>
    middleware(socket.request, {}, next);

export default function initIO(io: Server) {
  io.use(wrap(sessionMiddleware));
  io.use(wrap(passport.initialize()));
  io.use(wrap(passport.session()));

  io.use((socket: Socket, next: (err?: Error) => void) => {
    const req = socket.request as IncomingMessage;

    console.log("Session User:", req.user);

    if (req.user) {
      console.log(`User ${req.user.displayName || req.user.id} connected.`);

      socket.user = req.user;
      next();
    } else {
      console.log("Unauthenticated connection attempt rejected.");
      next(new Error("Unauthorized"));
    }
  });

  ///////////////////////now real thing begin/////////////////////////////

  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);
    socket.on("join_random", () => {
      if (waitingUser) {
        const partner = waitingUser;
        if (socket.id == waitingUser.id) {
          return;
        }
        waitingUser = null;

        const roomID = `room_${partner.id}_${socket.id}`;
        console.log(roomID);

        socket.join(roomID);
        partner.join(roomID);

        io.to(roomID).emit("match_found", { roomID });
        console.log(`Matched ${socket.id} with ${partner.id}`);
      } else {
        waitingUser = socket;
        socket.emit("waiting");
        console.log("waiting");
      }
    });

    socket.on("o_message", (data: { roomID: string; message: string }) => {
      socket.to(data.roomID).emit("I_message", {
        message: data.message,
        sender: socket.id,
      });
    });
    socket.on("disconnect", () => {
      if (waitingUser && waitingUser.id === socket.id) {
        waitingUser = null;
      }
      console.log("diss");
    });
  });
}
