import { processSendEmailJob } from "../services/queues/consumers.js";
import asyncHandler from "../utils/asyncHandler.js";

export const send = asyncHandler(async (req, res, next) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(200).json({
      message: "Please provide all required details (email, subject & message)",
    });
  }

  const data = {
    email,
    subject,
    message,
  };

  await processSendEmailJob(data);

  return res.status(200).json({
    status: 200,
    message: "Email job processing...",
  });
});
