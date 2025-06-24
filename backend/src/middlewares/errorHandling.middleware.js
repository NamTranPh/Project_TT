const errorHandling = (err, req, res, next) => {
  const statusCode = err.status ?? 500;

  const responseError = {
    status: "Error",
    code: statusCode,
    message: err.message || "Internal server error",
    stack: err.stack
  };

  return res.status(statusCode).json(responseError);
}

module.exports = errorHandling;