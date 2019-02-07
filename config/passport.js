const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    (username, password, done) => {
        db.User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
    
            // no user with the given username
            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
    
            // user exists, but password was wrong
            if (!user.validPassword(password)) {
                return done(null, false, {message: "Incorrect password" });
            }
    
            // correct password for existing username
            return done(null, user);
        });
    }
));

// For maintaining authentication across HTTP requests
// (i.e. staying logged in)
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;