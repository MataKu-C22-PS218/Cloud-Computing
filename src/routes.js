const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data_user',
  password: 'setiawan.21',
  port: 5432,
})

const registerUser = (request, response) => {
  const { username, email, password } = request.body

  pool.query('SELECT * FROM users WHERE username= $1', [username], (error, results) => {
    if (error) {
      throw error
    }

    if (results.rows.length > 0) {
      response.send('Username already exist!');
    } 

    else {
       pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200);
        response.send('Account has been added');
      })
    }	
  })
}

const loginUser  = (request, response) => {
  const {email, password } = request.body

  pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
    if (error) {
      throw error
    }

    if (results.rows.length > 0) {
      response.status(200);
      response.send('Login Sucessfull');
      //Authenticate the user
      // request.session.loggedin = true;
      // request.session.email = email;
      // request.session.password = password;
    } 
    else {
       response.send('Incorrect Username and/or Password!');
    }			
    response.end();
  })
}

module.exports = {
  registerUser,
  loginUser,
}