const express = require("express")
const controller = require("../controllers/clienteControllers")

const app = express.Router()

app.get("/cliente", controller.obterTodos)
app.get("/cliente/:id", controller.obterPorId)
app.post("/cliente", controller.cadastrar)
app.patch("/cliente/:id", controller.atualizar)
app.delete("/cliente/:id", controller.deletar)

module.exports = app
