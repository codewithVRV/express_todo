const products = [];
function createTodo (todo) {
    const newTodo = {
        id: products.length,
        ...todo,
    }
    products.push(newTodo);
    return newTodo;
}

function getTodos () {
    return products;
}

function getTodo (id) {
    return products.filter((todo) => todo.id === id)[0]
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    
}