const express = require('express')

const apiRouter = express.Router()
const pingRouterOne = require("./v1/ping_route")


apiRouter.use("/v1", pingRouterOne)




module.exports = apiRouter;