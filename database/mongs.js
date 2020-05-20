const mongo = require('mongoose');
const config = require('../config/connection')

module.exports.connect = function() {

    mongo.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
        if (err) return console.log(err);
        // let user = new model({login: 'str', password: '123', username: 'qwe'});

        // user.save((err1, product) => {
        //     mongo.disconnect();
        //
        //     if (err1) return console.log(err1);
        //     console.log('User saved: ' + product);

        // });
    });

    mongo.connection.on('succeed', args => {
        console.log('db connection setuped');
    });

    mongo.connection.on('error', args => {
        console.log('DB error: ' + args);
    });
}