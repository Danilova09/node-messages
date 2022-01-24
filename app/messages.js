const express = require('express');
const dataBase = require('../dataBase');
const router = express.Router();

router.get('/', (req, res) => {
    const messages = dataBase.getMessages();
    res.send(messages);
});

router.post('/', (req, res) => {
    const datetime = new Date().toISOString();
    const message = {
        message: req.body.message,
        datetime: datetime,
    }
    dataBase.addItem(message);
    return res.send(message);
});

module.exports = router;