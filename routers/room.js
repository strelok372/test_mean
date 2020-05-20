const express = require('express');
const router = express.Router();

router.get('/room/:roomId', (req, res) => {
    res.send('roomId: ' + req.param['roomId']);
});

router.get('/room', (req, res) => {
    res.sendFile(__dirname + '/create_room.html')
});

module.exports = router;