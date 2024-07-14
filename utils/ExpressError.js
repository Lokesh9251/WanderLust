class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    //super is a constructor
    this.statusCode = statusCode;
    this.message = message;
  }
}
module.exports = ExpressError;
