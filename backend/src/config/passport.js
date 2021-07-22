require("dotenv").config();
let passport = require("passport");
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user.model");
const  newToken  = require("../controllers/auth.controller");
const { v4: uuid } = require("uuid");
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:7001/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ email: profile?._json?.email })
                .lean()
                .exec();
            let token;
            if (user) {
                token = newToken(user);
            } else {
                user = await User.create({
                    email: profile?._json?.email,
                    password: uuid(),
                });
                token = newToken(user);
            }
            return done(null, { user, token });
        },
    ),
);

module.exports = passport;