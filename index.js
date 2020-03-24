// the way server-side code to get library files
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// console.developers.google.com
// 713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com
// SdQdM0Dl_ekwS2qGWxEVpQL7
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);