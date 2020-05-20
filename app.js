const userRouter = require("./routers/users");
const express = require("express");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bp = require('body-parser');
const passport = require('passport');
const http = require('http');
const roomRouter = require('./routers/room');
const mong = require('./database/mongs.js');
// const passport = require('./config/passport');

mong.connect();

let server = express();
const ioserver = http.createServer(server);
require('./io/socket-server')(ioserver);

server.use(express.static('public'))
server.use(cors());
server.use(bp.json());
server.use(passport.initialize());
server.use(passport.session());
require('./config/passport')(passport);

server.use('/users', userRouter);
server.use('/room', roomRouter);

server.get("/", (req, res) =>{
    res.sendFile(__dirname + '/public/index2.html');
});

server.use('/*', (req, res) =>{
    res.redirect('/');
    // res.code = 404;
})

ioserver.listen(3000, () => {
    console.log("server started successfully");
});