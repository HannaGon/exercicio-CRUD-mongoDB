require("dotenv").config()
const express = require("express")
const database = require("./database/mongoConfig")
const router = require("../src/routes/clienteRoutes")

const app = express()
app.use(express.json())

database.connect()

app.use("/api", router)

module.exports = app
