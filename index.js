const express = require('express');
const dataBase = require('./dataBase');
const messages = require('./app/messages');
const app = express();
const port = 8000;

dataBase.init();
app.use(express.json());
app.use('/messages', messages);

app.listen(port, () => {
    console.log('Server is listening port ' + port);
})