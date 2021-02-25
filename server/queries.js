const postgres = require('postgres');
const {Client} = require('pg');
const db = new Client({
  host: 'ec2-18-207-95-219.compute-1.amazonaws.com',
  user: 'upxxmnesagcmso',
  database: 'd9ongd99tkdl0c',
  port: 5432,
  password: '4d0a064f5740724c7bc3fa0d202ebf58b2af54acedfd70bfbde7b65959ca5260',
  url: 'postgres://upxxmnesagcmso:4d0a064f5740724c7bc3fa0d202ebf58b2af54acedfd70bfbde7b65959ca5260@ec2-18-207-95-219.compute-1.amazonaws.com:5432/d9ongd99tkdl0c'
});

db.connect();

const getUser = (name, cb) => {
  db.query(`SELECT * FROM user WHERE username = ($1)`, [name], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const createUser = (obj, cb) => {
  let u = obj.username;
  let n = obj.name;
  let p = obj.password;
  let w = obj.weight;
  let hf = obj.heightFeet;
  let hi = obj.heightInches;
  let m = obj.medication;
  let e = obj.email;

  db.query(`INSERT INTO user(username, p, name, email, weight, height_feet, height_inches, medication) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, [u, p, n, e, w, hf, hi, m], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, obj);
    }
  })
}

const editUserProfile = (id, obj, cb) => {
  db.query(`UPDATE user SET username = ($1), name = ($2), email = ($3), weight = ($4), height_feet = ($5), height_inches = ($6), medication = ($7) WHERE user_id = ($8)`, [obj.username, obj.name, obj.email, obj.weight, obj.heightFeet, obj.heightInches, obj.medication, id], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, obj);
    }
  })
}

const getJournalEntries = (id, cb) => {
  db.query('SELECT * FROM journal_entries WHERE user_id = ($1) ORDER BY entry_date DESC', [id], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const postJournalEntry = (id, obj, cb) => {
  db.query('INSERT INTO journal_entries(user_id, entry_date, mood, hours_of_sleep, activity1, activity2, activity3, symptom1, symptom2, symptom3, took_medication, notes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [id, obj.entry_date, obj.mood, obj.hours_of_sleep, obj.activity1, obj.activity2, obj.activity3, obj.symptom1, obj.symptom2, obj.symptom3, obj.took_medication, obj.notes], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, obj);
    }
  })
}

const editJournalEntry = (id, obj, cb) => {
  db.query('UPDATE journal_entries SET entry_date = ($2), mood = ($3), hours_of_sleep = ($4), activity1 = ($5), activity2 = ($6), activity3 = ($7), symptom1 = ($8), symptom2 = ($9), symptom3 = ($10), took_medication = ($11), notes = ($12) WHERE entry_id = ($1)', [obj.entryId, obj.entryDate, obj.mood, obj.hoursOfSleep, obj.activity1, obj.activity2, obj.activity3, obj.symptom1, obj.symptom2, obj.symptom3, obj.tookMedication, obj.notes], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, obj);
    }
  })
}

const deleteJournalEntry = (id, cb) => {
  db.query('DELETE FROM journal_entries WHERE entry_id =($1)', [id], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}


const getQuote = (id, cb) => {
  db.query('SELECT * FROM quotes WHERE quote_id = ($1)', [id], (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}


module.exports = {
  getUser,
  createUser, 
  editUserProfile,
  getJournalEntries,
  postJournalEntry,
  editJournalEntry,
  deleteJournalEntry,
  getQuote,
}
