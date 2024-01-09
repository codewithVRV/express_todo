const express = require("express")

const {pingController} = require("../../controller/ping_controller")
const { createTodo, getTodos, getTodo, destroyTodo, updateTodo } = require("../../controller/todo_controller")
const {todoValidator} = require("../../middlewares/todo_middleware")

const router = express.Router()


router.get("/ping", pingController)

router.get("/todos", getTodos)
router.get("/todos/:id", getTodo)
router.delete("/todos/:id", destroyTodo)
router.patch("/todos/:id", [todoValidator], updateTodo)
router.post("/todos", [todoValidator], createTodo)

module.exports = router;