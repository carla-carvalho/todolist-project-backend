const express = require('express');
const router = express.Router();
const TasksController = require('./../controllers/tasks.controller');
const tasksController = new TasksController;
const cors = require('cors');

router.get('/',  tasksController.getTasks);
router.get('/search', tasksController.getTask);
router.get('/concluidas', tasksController.getTaskConcluded);

router.post('/add', tasksController.createTask);

router.put('/:id/edit', tasksController.editTask);

router.delete('/:id/delete', tasksController.deleteTask);

module.exports = router;