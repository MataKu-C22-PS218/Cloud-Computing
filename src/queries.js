const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'capstone',
    password:'setiawan.21',
    port:5432
})

module.exports = pool;