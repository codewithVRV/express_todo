const { StatusCodes, ReasonPhrases } = require("http-status-codes")

const TodoService = require("../service/todo_service")
const TodoRepository = require("../repository/todo_repository")
const errorResponse = require("../utils/error_response")

const todoService = new TodoService(new TodoRepository())


async function createTodo (req, res) {
    try{
        // db processing
        const response = await todoService.createTodo(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            error: {},
            message: "successfully created new todo",
            data : response,
        })
    }
    catch (error) {
        console.log("create Todo controller error:", error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

async function getTodos (req, res) {
    try{
        // db processing
        const response = await todoService.getTodos()

        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "successfully fetch all todos",
            data : response,
        })
    }
    catch (error) {
        console.log("getTodos  controller error:", error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))

    }
}
async function getTodo (req, res) {
    try{
        // db processing
        const response = await todoService.getTodo(req.params.id)

        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: `successfully fetch  todo by given id : ${req.params.id}`,
            data : response,
        })
    }
    catch (error) {
        console.log("getTodo  controller error:", error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))

    }
}
async function destroyTodo (req, res) {
    try{
        // db processing
        const response = await todoService.destroyTodo(req.params.id)

        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: `successfully delete  todo by given id : ${req.params.id}`,
            data : response,
        })
    }
    catch (error) {
        console.log("delete todo controller error:", error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))

    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    destroyTodo,
}