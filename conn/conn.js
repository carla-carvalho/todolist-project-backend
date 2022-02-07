const mongoose = require('mongoose');

const Conn = () => { 
    mongoose.connect('mongodb://localhost:27017/tarefas',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Conexão com MongoDB executada com sucesso')
}).catch((err) => {
    console.error(err);

})

}



module.exports = Conn;