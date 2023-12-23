
class TodoService {
    constructor(repository){
        this.repository = repository;
    }
    async createTodo (todo) {
        const response = await this.repository.createTodo(todo.title)
        return response;
    }
    
    getTodos () {
        return products;
    }
    
    getTodo (id) {
        return products.filter((todo) => todo.id === id)[0]
    }
}

module.exports = TodoService;