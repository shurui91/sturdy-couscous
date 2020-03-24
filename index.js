// the way server-side code to get library files
const express = require('express');
const app = express();

// route handler
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(5000);