const express = require("express")

const {pingController} = require("../../controller/ping_controller")
const { createTodo } = require("../../controller/todo_controller")
const {createTodoValidator} = require("../../middlewares/todo_middleware")

const router = express.Router()


router.get("/ping", pingController)
router.get("/todos", (req, res) => {
    return res.json({message: "all todos here"})
})

router.post("/todos", [createTodoValidator], createTodo)

module.exports = router;