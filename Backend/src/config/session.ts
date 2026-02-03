import session from "express-session";
import connectSqlite3 from "connect-sqlite3";
import "./passport.js";

const SQLiteStore = connectSqlite3(session);

export const sessionMiddleware = session({
  store: new SQLiteStore({
    db: "sessions.sqlite",
    dir: "./",
  }) as any,
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  },
  name: "connect.sid",
});
