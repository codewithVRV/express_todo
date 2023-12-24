const InternalServerError = require("../error/internal_server_error");

class TodoService {
    constructor(repository){
        this.repository = repository;
    }
    async createTodo (todo) {
        try{
            const response = await this.repository.createTodo(todo.title)
            return response;
        }
        catch (error) {
            console.log("createTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }
    
    async getTodos () {
        // return products;
        try{
            const response = await this.repository.getTodos()
            return response;
        }
        catch (error) {
            console.log("getTodos error from todo service layer", error);
            throw new InternalServerError()
        }

    }
    
    async getTodo (id) {
        try{
            const response = await this.repository.getTodo(id);
            return response;
        }
        catch (error) {
            console.log("getTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }
    async destroyTodo (id) {
        try{
            const response = await this.repository.destroyTodo(id);
            return response;
        }
        catch (error) {
            console.log("destroryTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }
}

module.exports = TodoService;