const TasksSevice = require('./../services/tasks.service');
const tasksService = new TasksSevice;

class TasksController {

    getTasks = async (req, res) => {
        const tasks = await tasksService.findAll();
        res.send(tasks);
    }

    getTask = async (req, res) => {
        const task = await tasksService.findAllName();
        res.send(task); 

    }

    getTaskConcluded = async (req,res) =>{
        const taskConcluded = await tasksService.findAllConcluded();
        res.send(taskConcluded);
    }

    createTask = async (req, res) =>{
        const task = req.body;
        await tasksService.create(task)
        .then(() => {
        res.send({message: 'Tarefa adicionada com sucesso'})
        })
        .catch((err) => {
            res.status(500).send({message: 'Erro no servidor'})
        })
    }

    editTask = async (req, res) =>{
        const idParam = req.param.id;
        const taskEdit = req.body;
        await tasksService.edit(idParam, taskEdit)

    }

}

module.exports = TasksController;
