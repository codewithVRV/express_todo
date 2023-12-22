const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const port = 3002;
const {PORT} = require("./config/server_config")



app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))



app.listen(port, () => {
    console.log(`Server is listening at port ${PORT}`)
})