export const ioCorsCofig = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
};

export const expressCorsCofig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
