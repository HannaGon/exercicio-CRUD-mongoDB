const mongoose = require("mongoose")

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: false
        },
        cidade: {
            type: String,
            required: true
        },
        cep: {
            type: Number,
            required: true
        }
    },
    cliente_premium: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("cliente", clienteSchema)
