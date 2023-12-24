const { StatusCodes } = require("http-status-codes");

class InternalServerError extends Error{
    constructor() {
        const errorMessage = `Something Went wrong! Try again later.`
        super(errorMessage);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.errorMessage = errorMessage;
        this.name = "InternalServerError"
    }
}

module.exports = InternalServerError;