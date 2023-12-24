const InternalServerError = require("../error/internal_server_error");
const NotFoundError = require("../error/not_found");

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
            if(!response){
                throw new NotFoundError("Todo", "id", id)
            }
            return response;
        }
        catch (error) {
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("getTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }
    async destroyTodo (id) {
        try{
            const response = await this.repository.destroyTodo(id);
            if(!response){
                throw new NotFoundError("Todo", "id", id)
            }
            return response;
        }
        catch (error) {
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("destroryTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }

    async updateTodo (id, newTodo) {
        try{
            const response = await this.repository.updateTodo(id, newTodo);
            if(!response){
                throw new NotFoundError("Todo", "id", id)
            }
            return response;
        }
        catch (error) {
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("updateTodo error from todo service layer", error);
            throw new InternalServerError()
        }

    }
}

module.exports = TodoService;