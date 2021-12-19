import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,

  MAIL_HOST: process.env.MAIL_HOST || "",
  MAIL_PORT: process.env.MAIL_PORT || "",
  MAIL_USERNAME: process.env.MAIL_USERNAME || "",
  MAIL_PASSWORD: process.env.MAIL_PASSWORD || "",
  MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS || "",

  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  REDIS_USERNAME: process.env.REDIS_USERNAME || "root",
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
};
