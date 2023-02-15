const express = require('express')
const cors = require('cors')
const app = express()
const projectRouter = require("./controllers/project")
const middleware = require('./utils/milddleware')

app.use(cors())
app.use(express.json())
app.use("/api/projects", projectRouter)
app.use(middleware.unknownEndpoint)

module.exports = app