const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');
const env = require('./environment');

// tell passport to use a new strategy for goole auth
passport.use(new googleStrategy({
    clientID: env.google_clientID,
    clientSecret: env.google_clientSecret,
    callbackURL: env.google_callbackURL,
},

    function (accessToken, refreshToken, profile, done) {
    //    find a user
        User.findOne({ email: profile.emails[0].value }).exec(function (err, user) {
            if (err) { console.log("Error in Google Auth Strategy-Passpot", err); return; }
            console.log(profile);
            console.log(refreshToken, accessToken);
            if (user) {
                // if found set user as req.user
                return done(null, user);
            } else {
                // if not found then create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    emails: profile.emails[0].value,
                    password: crypto.randomBytes[20].toSring('hex')
                }, function (err, user) {
                    if (err) { console.log("Error in creating Google Auth Strategy-Passpot", err); return; }
                    return done(null, user);
                });
            }


        })
    }

))

module.exports = passport;