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
			callbackURL: 'http://localhost:5000/auth/google/callback'
		},
		accessToken => {
			console.log(accessToken);
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		// what kind of access is given
		scope: ['profile', 'email']
	})
);

// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com

// https://console.developers.google.com/apis/credentials/oauthclient/713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com?project=713354894804

app.get('auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
