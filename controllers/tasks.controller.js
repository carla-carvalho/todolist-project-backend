
const TasksSevice = require('./../services/tasks.service');
const tasksService = new TasksSevice;

class TasksController {

    getTasks = async (req, res) => {
        const tasks = await tasksService.findAll();
        res.send(tasks);
    }

    getTask = async (req, res) => {
        const task = await tasksService.findByName();
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
            res.status(500).send({message: 'Um erro foi encontrado'})
        })
    }

    editTask =  async (req, res) => {
        const idParam = req.params.id;
        const taskEdit = req.body;
        await tasksService.edit(idParam, taskEdit)
        .then(() => {
            res.send({message: 'A tarefa foi editada com sucesso.'})
        })
        .catch(err => {
            res.status(500).send({message: 'Um erro foi encontrado'})
        })
    }

    deleteTask = async (req, res) => {
        const idParam = req.params.id;
        await tasksService.delete(idParam)
        .then(() => {
            res.send({message: 'A tarefa foi excluída com sucesso'})
        })
        .catch(err => {
            res.status(500).send({message:'Um erro foi encontrado'})
        })
    }

}

module.exports = TasksController;
