// the way server-side code to get library files
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

// console.developers.google.com
// 713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com
// SdQdM0Dl_ekwS2qGWxEVpQL7
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		accessToken => {
			console.log(accessToken);
		}
	)
);

app.get(
	// path
	'/auth/google',
	passport.authenticate('google', {
		// what kind of access is given
		scope: ['profile', 'email']
	})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
