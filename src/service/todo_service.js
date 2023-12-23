
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
    
    getTodo (id) {
        return products.filter((todo) => todo.id === id)[0]
    }
}

module.exports = TodoService;