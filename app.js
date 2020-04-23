const express = require("express");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bp = require('body-parser');
const passport = require('passport');
const http = require('http');

const e = express();
e.listen(3000, () => {
    console.log("123");
});

e.get("/", (req, res) =>{
    res.send("hello");
});