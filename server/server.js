const express = require('express');
const app = express();
const PORT = 3000;
const queries = require('./queries.js')

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get('/users/:username', (req, res) => {
		res.status(200).send('The server is taking requests to the products/:username endpoint');
});

app.post('/users', (req, res) => {
	let userObj = req.body.data
	console.log(userObj)
})

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});