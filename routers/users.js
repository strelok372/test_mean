const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/connection');

userRouter.post("/register", (req, res) => {
    if (req.body == null) res.code = 400;

    let newUser = new userModel({
        login: req.body.login,
        password: req.body.password,
        username: req.body.username
    });

    userModel.saveUser(newUser, (err, usr) => {
        if (err) {
            res.json({
                success: false,
                msg: 'failed to register new user'
            });
        } else {
            res.json({
                success: true,
                msg: 'user created successfully'
            });
        }
    });
});

userRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + '/public/reg.html');
});

userRouter.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({user: req.user});
});

userRouter.post('/authenticate', (req, res, next) => {
    console.log("im in auth!");
    const username = req.body.login;
    const password = req.body.password;

    console.log(req.body);
    userModel.getUserByName(username, (err, User) => {
        if (err) throw err;
        if (!User) {
            return res.json({success: false, msg: 'User not found'});
        }

        userModel.comparePassword(password, User.password, (err, isMatch) => {
            if (err) throw  err;

            if (isMatch) {
                const token = jwt.sign(
                    User.toJSON(),
                    config.secret,
                    {expiresIn: 604800});

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: User.id,
                        name: User.username,
                        login: User.login
                    }
                });
            } else {
                res.json(
                    {
                        success: false,
                        msg: 'Wrong password'
                    });
            }
        });
    });
});

module.exports = userRouter;