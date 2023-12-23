
class TodoService {
    constructor(repository){
        this.repository = repository;
    }
    async createTodo (todo) {
        const response = await this.repository.createTodo(todo.title)
        return response;
    }
    
    async getTodos () {
        // return products;
        const response = await this.repository.getTodos()
        return response;
    }
    
    async getTodo (id) {
        const response = await this.repository.getTodo(id);
        return response;
    }
}

module.exports = TodoService;