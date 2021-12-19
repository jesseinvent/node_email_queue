import { createTransport } from "nodemailer";
import configs from "../config/configs.js";
import logger from "../utils/logger.js";

export const sendEmail = async (email, data = { subject, message }) => {
  return new Promise((resolve, reject) => {
    const transporter = createTransport({
      host: configs.MAIL_HOST,
      port: configs.MAIL_PORT,
      secure: false,
      auth: {
        user: configs.MAIL_USERNAME,
        pass: configs.MAIL_PASSWORD,
      },
    });

    logger.info("Sending email...");

    const emailData = {
      from: configs.MAIL_FROM_ADDRESS,
      to: email,
      subject: data.subject,
      text: data.message,
    };

    transporter
      .sendMail(emailData)
      .then((res) => {
        logger.info(`Mail sent with data ${JSON.stringify(res)}`);
        return resolve(res);
      })
      .catch((err) => {
        logger.info(
          `Sending email failed with Error: ${err.message}`
        );
        return reject(err);
      });
  });
};
