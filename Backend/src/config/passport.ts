import { prismaClient } from "../utils/client.js";

import passport, { type Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  type VerifyCallback,
} from "passport-google-oauth20";
import { envConfig } from "./env.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: envConfig.GOOGLE_CLIENT_ID,
      clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
      if (!profile.emails?.[0]?.value) {
        throw new Error("Email is required from Google profile");
      }
      const email = profile.emails[0].value;
      const photo = profile.photos?.[0]?.value ?? null;

      try {
        const user = await prismaClient.user.create({
          data: {
            email: email,
            googleId: profile.id,
            name:
              profile.displayName ||
              profile.emails[0]?.value.split("@")[0] ||
              "User",
            picture: photo,
          },
        });
      } catch (error: any) {
        if (error.code === "P2002") {
          // User already exists, fetch instead
          const user = await prismaClient.user.findUnique({
            where: { googleId: profile.id },
          });
        }
      }

      console.log("User profile", profile);
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user as any));
