const postgres = require('postgres');
const {Client} = require('pg')
const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'flower11',
  database: 'mvp',
  port: 1111
});

db.connect();

const createUser = (obj, cb) => {
  console.log(obj)
  console.log(obj.username)
  let u = obj.username;
  let n = obj.name;
  let p = obj.password;
  let w = obj.weight;
  let hf = obj.heightFeet;
  let hi = obj.heightInches;
  let m = obj.medication;
  let e = obj.email;

  db.query(`INSERT INTO users(username, p, name, email, weight, height_feet, height_inches, medication) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, [u, p, n, e, w, hf, hi, m], (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, obj)
    }
  })
}

const getUser = (name, cb) => {
  console.log(name)
  db.query(`SELECT * FROM users WHERE username = ($1)`, [name], (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getQuote = (id, cb) => {
  console.log(id)
  db.query('SELECT * FROM quotes WHERE quote_id = ($1)', [id], (err, results) => {
    if(err) {
      cb(err, null)
    } else {
      console.log(results)
      cb(null, results)
    }
  })
}

const postJournalEntry = (id, obj, cb) => {
  console.log(obj)
  console.log(id)
  db.query('INSERT INTO journal_entries(user_id, entry_date, mood, hours_of_sleep, activity1, activity2, activity3, symptom1, symptom2, symptom3, took_medication, notes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [id, obj.entry_date, obj.mood, obj.hours_of_sleep, obj.activity1, obj.activity2, obj.activity3, obj.symptom1, obj.symptom2, obj.symptom3, obj.took_medication, obj.notes], (err, results) => {
    if(err) {
      console.log(err)
      cb(err, null)
    } else {
      console.log('success')
      cb(null, obj)
    }
  })
}

const getJournalEntries = (id, cb) => {
  db.query('SELECT * FROM journal_entries WHERE user_id = ($1) ORDER BY entry_date DESC', [id], (err, results) => {
    if(err) {
      console.log(err)
      cb(err, null)
    } else {
      console.log('success')
      cb(null, results)
    }
  })
}


module.exports = {
  createUser,
  getUser,
  getQuote,
  postJournalEntry,
  getJournalEntries,
}