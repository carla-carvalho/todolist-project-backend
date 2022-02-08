const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    descricao: {type: String},
    prioridade: {type: String},
    concluido: {type: Boolean, default: false},
    dataCriacao: {type: Date, default: Date.now}
})

const taskModel = mongoose.model('tasks', taskSchema)

module.exports = taskModel;