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

    async updateTodo (todoId, newTodo) {
        try{
            const response = await Todo.update(
                { title: newTodo }, // Fields to be updated and their new values
                {
                  where: {
                    id: todoId, // Conditions for the update
                  },
                }
            )
            return response;

        }
        catch (error) {
            console.log("Error from todoRepository destroyTodo", error)
            throw error;
        }
    }
}


module.exports = TodoRepository;