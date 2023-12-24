const Todo = require("../modal/todo")

class TodoRepository {
    async getTodos () {
        try{
            const response = await Todo.findAll()
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository getTodos", error)
            throw error;
        }
    }

    async getTodo (id) {
        try{
            const response = await Todo.findByPk(id)
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository getTodo", error)
            throw error;
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
            throw error;
        }
    }
    async destroyTodo (todoId) {
        try{
            const response = await Todo.destroy({
                where:{
                    id: todoId,
                }
            })
            return response;
        }
        catch (error) {
            console.log("Error from todoRepository destroyTodo", error)
            throw error;
        }
    }
}


module.exports = TodoRepository;