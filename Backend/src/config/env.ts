import dotenv from "dotenv";

dotenv.config();

// export const envConfig = {
//   GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//   PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
// };

// src/config/env.ts
// Helper function to ensure value exists
const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const envConfig = {
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"), // Now guarantees 'string'
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};
