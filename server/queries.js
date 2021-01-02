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


module.exports = {
  createUser,
  getUser,
  getQuote
}