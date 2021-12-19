import Queue from "bull";
import logger from "../utils/logger.js";
import configs from "./configs.js";

export const connectQueue = (queueName) => {
  const queueInstance = new Queue(queueName, {
    redis: {
      port: configs.REDIS_PORT,
      host: configs.REDIS_HOST,
    //   username: configs.REDIS_USERNAME,
    //   password: configs.REDIS_PASSWORD,
    },
  });

  queueInstance.on("error", (error) => {
    logger.error(`${error.name}: ${error.message}`);
  });
  return queueInstance;
};
