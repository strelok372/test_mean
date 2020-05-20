const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const user = require('../models/user');
const config = require('./connection');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (payload, done) => {
        console.log(payload);
        user.getUserById(payload._id, (err, res) => {
            if (err) return done(err, false);
            if (res) return done(null, res);
            return done(null, false);
        });
    }));
}