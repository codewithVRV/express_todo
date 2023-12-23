const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const responseTime = require("response-time")
const {PORT} = require("./config/server_config")
const apiRouter = require("./routes/api_router")


app.use(responseTime())

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))

// app.get("/api/v1/ping", (req, res) => {
//     return res.json({message: "alive"})
// })
app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})