const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadRequest extends Error{
    constructor(propertyMissing) {
        const errorMessage = ` ${propertyMissing} is missing from the request body.`
        super(errorMessage);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.errorMessage = errorMessage;
        this.reason = ReasonPhrases.BAD_REQUEST;
        this.name = "BadRequest";
    }
}

module.exports = BadRequest;