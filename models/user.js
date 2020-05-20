const mongo = require('mongoose');
const schema = mongo.Schema;
let bcrypt = require('bcryptjs');
const config = require('../config/connection');

const userSchema = new schema({
    login: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});

const userModel = module.exports = mongo.model('users', userSchema);

module.exports.getUserByName = function(name, callback) {
    userModel.findOne({login: name}, callback);
};

module.exports.getUserById = function(id, callback) {
    userModel.findById(id, callback);
};

module.exports.saveUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err1, hash) => {
            if (err1) throw err1;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};
