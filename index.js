if(process.env.NODE_ENV !== 'production'){
require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const app = express();
const TasksRouter = require('./routes/tasks.routes');
const Conn = require('./conn/conn');

app.use(express.json());
app.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.use('/', TasksRouter);

const port = 3001;
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})
