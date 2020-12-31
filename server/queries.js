const postgres = require('postgres');
const {Pool} = require('pg')
const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'flower11',
  database: 'mvp',
  port: 1111
});

db.connect();

const createUser = (obj) => {
  db.query('')
}

const getUser = (name) => {
  db.query('SELECT * FROM users WHERE username = ?', name, )
}


module.exports = {
  createUser,
  getUser
}