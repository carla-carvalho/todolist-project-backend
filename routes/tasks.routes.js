const express = require('express');
const router = express.Router();
const TasksController = require('./../controllers/tasks.controller');
const tasksController = new TasksController;

router.get('/', tasksController.getTasks);
router.get('/search', tasksController.getTask);
router.get('/concluidas', tasksController.getTaskConcluded);

router.post('/add', tasksController.createTask);

router.put('/:id', tasksController.editTask);

router.delete('/:id', tasksController.deleteTask);

module.exports = router;