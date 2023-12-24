const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const BadRequest = require("../error/bad_request")
const errorResponse = require("../utils/error_response")

function todoValidator (request, response, next) {
    if(!request.body.title) {
        return response.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Title")))
    }
    // if everhting goes successfull then call next
    next()
}



module.exports = {
    todoValidator,
}