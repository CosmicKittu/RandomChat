import { Router } from "express";
import passport from "passport";

import {
  loginWithGoogle,
  googleCallback,
  logout,
  profileController,
} from "./auth.controler.js";

const authrouter = Router();

authrouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  }),
  loginWithGoogle,
);

authrouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  googleCallback,
);

authrouter.get("/profile", profileController);

authrouter.get("/logout", logout);

export default authrouter;
