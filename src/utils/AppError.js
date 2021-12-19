export class AppError extends Error {
  constructor(statusCode, message) {
    super();

    this.statusCode = statusCode;
    this.status = "Error";
    this.message = message;
  }
}

export const handleError = (err, res) => {
    console.log(err);
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    status: "error",
    message: err.message,
  });
  
};
