const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql2")
const responseTime = require("response-time")
const {PORT,} = require("./config/server_config")
const apiRouter = require("./routes/api_router")

const db = require("./config/db_config")

const Todo = require("./modal/todo")

app.use(responseTime())

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))

// app.get("/api/v1/ping", (req, res) => {
//     return res.json({message: "alive"})
// })
app.use("/api", apiRouter)

app.listen(PORT, async () => {
    console.log(`Server is listening at port ${PORT}`)
    await db.sync();
    console.log("DB Connected Successfully")
    // const res = Todo.create({
    //     title: "First Todo"
    // })
    // console.log(res)
})