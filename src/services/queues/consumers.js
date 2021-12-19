import logger from "../../utils/logger.js";
import { sendEmail } from "../emailService.js";
import { initialiseEmailQueue } from "./producers.js";

export const processSendEmailJob = async (data) => {

  const emailQueue = await initialiseEmailQueue(data);

  emailQueue.process("emails", async (job, done) => {
    try {
      const data = job.data;
      await sendEmail(data.email, {
        subject: data.subject,
        message: data.message,
      });
      done(null, "completed");
    } catch (error) {
      logger.error(`Failed Job! ${error.name}: ${error.message}`);
      done(error);
    }
  });

  emailQueue.on("progress", (job, progress) => {
    logger.info(`Job <${job.id}> is in progress...`);
  });

  emailQueue.on("completed", (job, result) => {
    logger.info(
      `Job <${job.queue.name}> id <${job.id}> successfully completed with result ${result}`
    );
  });

  emailQueue.on("failed", (job, err) => {
    logger.info(
      `Job <${
        job.queue.name
      }> failed to complete successfully for: ${JSON.stringify(
        job.data
      )} with message ${err.message}`
    );
  });

  emailQueue.on("stalled", (job) => {
    logger.info(`Job in ${job.queue.name} stalled for ${job.id}`);
  });
};
