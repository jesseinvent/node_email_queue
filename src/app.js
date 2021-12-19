import express from "express";
import emailRoutes from "./routes/emailRoutes.js";
import { handleError } from "./utils/AppError.js";
import logger from "./utils/logger.js";

const app = express();

app.use(express.json());

app.use("/", emailRoutes);

app.use((err, req, res, next) => {
  logger.error(`${err.name}: ${err.message}`);
  handleError(err, res);
});

export default app;
