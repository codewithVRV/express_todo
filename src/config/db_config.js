const { Sequelize } = require('sequelize');

const {DB_NAME, DB_PASS, DB_URL, DB_USER} = require("../config/server_config")

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_URL,
    dialect: 'mysql',
  })

module.exports = sequelize;



// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });