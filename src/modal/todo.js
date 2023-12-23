
const  Sequelize  = require("sequelize")
const db = require("../config/db_config")

const Todo = db.define("todo", {
    title : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
})

module.exports = Todo;