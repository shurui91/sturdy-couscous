const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes');
app;

// console.developers.google.com
// 713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com
// SdQdM0Dl_ekwS2qGWxEVpQL7

// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com

// https://console.developers.google.com/apis/credentials/oauthclient/713354894804-rm40h5rl6bagvjg1r14oc74kmpqj0qnr.apps.googleusercontent.com?project=713354894804

const PORT = process.env.PORT || 5000;
app.listen(PORT);
