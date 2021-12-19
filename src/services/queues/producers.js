import { connectQueue } from "../../config/queue.js";
import logger from "../../utils/logger.js";

/**
 * Add Jobs to the queue
 */

const jobOptions = {
  removeOnCompleted: true,
  attempts: 3,
  timeout: 1000 * 60 * 1,
  // delay: 60000,
};

export const initialiseEmailQueue = async (data) => {
  const queue = connectQueue("send-email");
  await queue.add("emails", data, jobOptions);
  logger.info(`Job <${queue.name}> added to the queue.`);
  return queue;
};
