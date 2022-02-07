const express = require('express');
const cors = require('cors');
const app = express();
const TasksRouter = require('./routes/tasks.routes');
const Conn = require('./conn/conn');

app.use(express.json());
app.use(cors());

Conn();
app.use('/tasks', TasksRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})
