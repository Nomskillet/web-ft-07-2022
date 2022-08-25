/// connection to express for postgres


const pgp = require('pg-promise')();

let connectionString = {
    host:'localhost',
    port: 5432,
    database: 'menus',
    user: 'postgres'
}


const db = pgp(connectionString)

module.exports = db;