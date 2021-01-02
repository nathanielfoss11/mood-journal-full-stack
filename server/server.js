const express = require('express');
const app = express();
const PORT = 3000;
const queries = require('./queries.js')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
app.use(express.static('../client/dist'));
app.use(bodyParser.json()); 

app.get('/users/:username', (req, res) => {
	queries.getUser(req.params.username, (err, result) => {
		if(err) {
			console.log(err)
		} else {
			res.status(200).send(result.rows);
		}
	})
});

app.post('/users', (req, res) => {
	let userObj = req.body
	userObj.weight = parseInt(userObj.weight)
	userObj.heightFeet = parseInt(userObj.heightFeet)
	userObj.heightInches = parseInt(userObj.heightInches)
	console.log(userObj)
	queries.createUser(userObj, (err, result) => {
		if(err) {
			console.log(err)
		} else {
			res.status(200).send(userObj)
		}
	})
})

app.get('/quotes/:id', (req, res) => {
	console.log(req.data)
	let id = parseInt(req.params.id) + 1664
	queries.getQuote(id, (err, result) => {
		if(err) {
			console.log(err)
		} else {
			res.status(200).send(result.rows);
		}
	})
});


app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});