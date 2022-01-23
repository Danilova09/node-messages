const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of messages will be here');

});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Message will be created here');
});

module.exports = router;