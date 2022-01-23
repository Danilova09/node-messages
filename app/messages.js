const express = require('express');
const dataBase = require('../dataBase');
const router = express.Router();


router.get('/', (req, res) => {
    const messages = dataBase.getMessages();
    res.send(messages);
});

router.post('/', (req, res) => {
    const datetime = 'date';
    const message = {
        message: req.body.message,
        datetime: datetime,
    }
    dataBase.addItem(message);
    return res.send('created message');
});

module.exports = router;