
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log("access token", accessToken);
            // console.log("refresh token", refreshToken);
            console.log("profile token", profile.id);
            // console.log("done", done)
            User.create({googleId: profile.id});
        }
    )
);
