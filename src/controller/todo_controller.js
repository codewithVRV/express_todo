function createTodo (request, response) {
    try{
        // db processing

        return response.json({
            success: true,
            error: {},
            message: "successfully created new todo",
            data : {
                id: Math.random() * (20),
                title: ""
            }
        })
    }
    catch (error) {
        console.log("create product controller error:", error)
    }
}

module.exports = {
    createTodo,
}