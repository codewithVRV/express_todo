const errorResponse = require("../utils/error_response")

function createTodoValidator (request, response, next) {
    if(!request.body.title) {
        return response.json(errorResponse("title is missing", {message: "title missing form req body"}))
    }
    // if everhting goes successfull then call next
    next()
}


module.exports = {
    createTodoValidator,
}