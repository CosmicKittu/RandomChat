import { envConfig } from "./config/env.js";
import server from "./app.js";

server.listen(envConfig.PORT, () => {
  console.log(`Server running on http://localhost:${envConfig.PORT}`);
});
