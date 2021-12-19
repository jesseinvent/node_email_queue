import http from "http";
import app from "./app.js";
import configs from "./config/configs.js";
import logger from "./utils/logger.js";

const server = http.createServer(app);

server.listen(configs.PORT, (err) => {
  logger.info(
    `Server up and running, listening on http://localhost:${configs.PORT}`
  );
});

process.on("uncaughtException", (err) => {
  logger.error("An uncaughtException occured");
  logger.error(`${err.name}, ${err.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
    logger.error("An unhandledRejection occured");
    logger.error(`${err.name}, ${err.message}`);
    process.exit(1);
});
  