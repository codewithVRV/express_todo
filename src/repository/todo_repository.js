const Todo = require("../modal/todo")

class TodoRepository {
    async getTodos () {
        try{
            const response = await Todo.findAll()
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository getTodos", error)
        }
    }

    async getTodo (id) {
        try{
            const response = await Todo.findByPk(id)
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository getTodo", error)
        }
    }
    async createTodo (title) {
        try{
            const response = await Todo.create({
                title,
            })
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository createTodo", error)
        }
    }
}


module.exports = TodoRepository;