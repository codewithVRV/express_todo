const { StatusCodes } = require("http-status-codes")
const todoService = require("../service/todo_service")

function createTodo (request, res) {
    try{
        // db processing
        const response = todoService.createTodo(request.body)

        return res.status(StatusCodes.CREATED).json({
            success: true,
            error: {},
            message: "successfully created new todo",
            data : response,
        })
    }
    catch (error) {
        console.log("create product controller error:", error)
    }
}

function getTodos (req, res) {
    try{
        // db processing
        const response = todoService.getTodos()

        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "successfully fetch all todos",
            data : response,
        })
    }
    catch (error) {
        console.log("create product controller error:", error)
    }
}
function getTodo (req, res) {
    try{
        // db processing
        console.log(req.params.id)
        const response = todoService.getTodo(req.params.id)
        console.log("response of single todo from controller", response)

        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "successfully fetch  todo by given id",
            data : response,
        })
    }
    catch (error) {
        console.log("create product controller error:", error)
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
}