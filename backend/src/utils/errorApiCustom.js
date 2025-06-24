class ErrorApi extends Error {
  constructor(message, statusCode, code){
    super(message);
    this.statusCode = statusCode;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorApi;