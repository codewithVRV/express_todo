const BadRequest = require("../error/bad_request")
const errorResponse = require("../utils/error_response")

function createTodoValidator (request, response, next) {
    if(!request.body.title) {
        return response.status(404).json(errorResponse("Title is not present in the incoming request", new BadRequest("Title")))
    }
    // if everhting goes successfull then call next
    next()
}


module.exports = {
    createTodoValidator,
}