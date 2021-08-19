// set up connection to database and then export it here
// requiring pgp as dependency
const pgp = require('pg-promise')(/* options */);
const pw = require('../../config.js');

// this is my connection details used to create my db object
const connection = {
  host: '18.119.122.0',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: pw.pw,
  max: 10
}

// creating my database object from the connection
module.exports.db = pgp(connection);