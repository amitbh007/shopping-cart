const passport=require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User=require("../models/user");


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
