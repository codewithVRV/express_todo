const express = require("express")

const {pingController} = require("../../controller/ping_controller")
const { createTodo, getTodos, getTodo, destroyTodo } = require("../../controller/todo_controller")
const {createTodoValidator} = require("../../middlewares/todo_middleware")

const router = express.Router()


router.get("/ping", pingController)
router.get("/todos", getTodos)
router.get("/todos/:id", getTodo)
router.delete("/todos/:id", destroyTodo)

router.post("/todos", [createTodoValidator], createTodo)

module.exports = router;