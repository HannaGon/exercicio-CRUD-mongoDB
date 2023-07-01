const clienteSchema = require("../models/clienteSchema")
const clienteModel = require("../models/clienteModel")

const obterTodos = async (request, response) => {
    try {
        const clientes = await clienteSchema.find({})
        response.status(200).send(clientes)
    } catch (error) {
        response.status(500).send({ mensagem: error.message })
    }
}

const obterPorId = async (request, response) => {
    try {
        const id = request.params.id
        const cliente = await clienteSchema.findById(id)
        if (cliente) {
            response.status(200).send(cliente)
        } else {
            response.status(404).send({ mensagem: `Não foi encontrado o cliente de ID ${id}.` })
        }
    } catch (error) {
        response.status(500).send({ mensagem: error.message })
    }
}

const cadastrar = async (request, response) => {
    try {
        const clienteModelSchema = Object.assign({}, clienteModel, request.body)
        const clienteNovo = new clienteSchema(clienteModelSchema)
        const cliente = await clienteNovo.save()
        response.status(201).send(cliente)
    } catch (error) {
        response.status(500).send({ mensagem: error.message })
    }
}

const atualizar = async (request, response) => {
    try {
        const id = request.params.id
        const cliente = await clienteSchema.findById(id)
        if (cliente) {
            Object.keys(clienteModel).forEach(key => {
                if (request.body.hasOwnProperty(key)) {
                    if (cliente[key] instanceof Object && request.body[key] instanceof Object) {
                        Object.assign(cliente[key], request.body[key]);
                    } else {
                        cliente[key] = request.body[key];
                    }
                }
            })
            const clienteAtualizado = await cliente.save()
            response.status(200).send(clienteAtualizado)
        } else {
            response.status(404).send({ mensagem: `Não foi encontrado o cliente de ID ${id}.` })
        }
    } catch (error) {
        response.status(500).send({ mensagem: error.message })
    }
}

const deletar = async (request, response) => {
    try {
        const id = request.params.id
        const cliente = await clienteSchema.findById(id)
        if (cliente) {
            await cliente.deleteOne()
            response.status(200).send({ mensagem: `O cliente de ID ${id} foi deletado.` })
        } else {
            response.status(404).send({ mensagem: `Não foi encontrado o cliente de ID ${id}.` })
        }
    } catch(error) {
        response.status(500).send({ mensagem: error.message })
    }
}

module.exports = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}
