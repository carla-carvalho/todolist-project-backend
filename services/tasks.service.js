const taskModel = require('./../models/task');
const TasksModel = require('./../models/task');


class tasksService {
     findAll = async () => await TasksModel.find();

     findAllConcluded = async () => await TasksModel.find({concluido: true});

     findAllName = async (task) => {
          return await TasksModel.find({nome: 'nome'});
     }

     create = async (task) => {
          return await TasksModel.create(task);
     }

     edit = async (id, task) =>{
          return TasksModel.updateOne({_id: id}, task);
     }
}



module.exports = tasksService;

    
