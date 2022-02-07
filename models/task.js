// const task = (sequelize, DataTypes) => {
// const Task = sequelize.define('Task', {
//     nome: { 
//         type: DataTypes.STRING
//     },
//     descricao: { 
//         type: DataTypes.STRING
//     },
//     prioridade: {
//         type: DataTypes.STRING
//     },
//     concluido: {
//         type: DataTypes.BOOLLEAN
//     }



// }



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