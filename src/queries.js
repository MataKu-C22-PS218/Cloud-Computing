const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'34.101.78.107',
    database:'mataku',
    password:'Matamu',
    port:5432
})

module.exports = pool;