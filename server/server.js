const express = require('express');
const app = express();
const PORT = 3002;
const queries = require('./queries.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(express.static('../client/dist'));
app.use(bodyParser.json()); 

app.get('/users/:username', (req, res) => {
	queries.getUser(req.params.username, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(result.rows);
		}
	})
});

app.post('/users', (req, res) => {
	let userObj = req.body;
	let username = userObj.username;
	userObj.weight = parseInt(userObj.weight);
	userObj.heightFeet = parseInt(userObj.heightFeet);
	userObj.heightInches = parseInt(userObj.heightInches);
	queries.createUser(userObj, (err, result1) => {
		if(err) {
			console.log(err);
		} else {
			
			queries.getUser(username, (err, result2) => {
				if(err) {
					console.log(err);
				} else {
					res.status(200).send(result2.rows);
				}
			})
		}
	})
})

app.get('/quotes/:id', (req, res) => {
	let id = parseInt(req.params.id) + 1664;
	queries.getQuote(id, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(result.rows);
		}
	})
});


app.post('/users/:id/journal', (req, res) => {
	let userObj = req.body;
	let id = req.params.id;
	userObj.hoursOfSleep = parseInt(userObj.hoursOfSleep);
	userObj.mood = parseInt(userObj.mood);
	queries.postJournalEntry(id, userObj, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(userObj);
		}
	})
})

app.put('/users/:id/journal', (req, res) => {
	let userObj = req.body;
	let id = req.params.id;
	userObj.hoursOfSleep = parseInt(userObj.hoursOfSleep);
	userObj.mood = parseInt(userObj.mood);
	userObj.entryId = parseInt(userObj.entryId);
	queries.editJournalEntry(id, userObj, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(userObj);
		}
	})
})

app.get('/users/:id/journal', (req, res) => {
	const id = req.params.id;
	queries.getJournalEntries(id, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(result.rows);
		}
	})
}) 

app.delete('/journal/:id', (req, res) => {
	const id = req.params.id;
  queries.deleteJournalEntry(id, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(result.rows);
		}
	})
})

app.put('/users/:id', (req, res) => {
	let userObj = req.body;
	let id = req.params.id;
	userObj.weight = parseInt(userObj.weight);
	userObj.heightFeet = parseInt(userObj.heightFeet);
	userObj.heightInches = parseInt(userObj.heightInches);
	queries.editUserProfile(id, userObj, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send(userObj);
		}
	})
})


app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT));
});