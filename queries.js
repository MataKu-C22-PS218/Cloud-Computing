//variabel database
const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'capstone',
    password:'Keyakizaka_',
    port:5432
});

module.exports = pool;