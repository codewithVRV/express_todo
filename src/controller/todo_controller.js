const { StatusCodes } = require("http-status-codes")

function createTodo (request, response) {
    try{
        // db processing

        return response.status(StatusCodes.CREATED).json({
            success: true,
            error: {},
            message: "successfully created new todo",
            data : {
                id: Math.random() * (20),
                title: request.body.title,
            }
        })
    }
    catch (error) {
        console.log("create product controller error:", error)
    }
}

module.exports = {
    createTodo,
}