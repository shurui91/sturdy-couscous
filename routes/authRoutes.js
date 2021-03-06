const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			// what kind of access is given
			scope: ['profile', 'email']
		})
	);

	app.get('auth/google/callback', passport.authenticate('google'));
};
