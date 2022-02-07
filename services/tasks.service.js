const taskModel = require('./../models/task');
const TasksModel = require('./../models/task');


class tasksService {
     findAll = async () => await TasksModel.find();

     findAllConcluded = async () => await TasksModel.find({concluido: true});

     findByName = async () => {
          return await TasksModel.find({nome: 'nome'});
     }

     create = async (task) => {
          return await TasksModel.create(task);
     }

     edit = async (id, task) =>{
          return await TasksModel.updateOne({_id: id}, task);
     }

     delete = async (id) => {
          return TasksModel.deleteOne({_id: id});
     }
}



module.exports = tasksService;

    
