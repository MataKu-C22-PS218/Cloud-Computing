const pool = require('./queries')
var md5 = require('md5');

//handler untuk menambah lokasi
const addLocation = (request, response) => {
    const {username, place} = request.body

    pool.query('INSERT INTO location_history(username, place) VALUES ($1, $2)', [username, place], (error, results) => {
      if (error) {
        throw error
      }
      
      response.status(200);
      response.send('location_update : ' + place);
    })
}

//handler untuk mendapatkan lokasi
const getLocation = (request, response) => {
  const {username} = request.body

    pool.query('SELECT * FROM location_history WHERE username = $1', [username], (error, results) => {
      if (error) {
        throw error
      }
  
      if (results.rows.length > 0) {
          response.status(200);
          response.send(results.rows);
      }

      else {
        response.status(404);
        response.send('Location data is empty!');
      }
    })
}

//handler untuk register user
const registerUser = (request, response) => {
  const { username, email, password } = request.body

  const securePassword = md5(password);

  pool.query('SELECT * FROM users WHERE username= $1 OR email= $2', [username, email], (error, results) => {
    if (error) {
      throw error
    }

    if (results.rows.length > 0) {
      response.send('Username and/or email already exist!');
    } 

    else {
       pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, securePassword], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200);
        response.send('Account ' + request.body.username + ' has been added');
      })
    }	
  })
}

//handler untuk login user
const loginUser  = (request, response) => {
  const {email, password } = request.body

  const securePassword = md5(password);

  pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, securePassword], (error, results) => {
    if (error) {
      throw error
    }

    if (results.rows.length > 0) {
      response.status(200);
      response.send(results.rows[0].username);
      console.log('Login ' + request.body.email + ' Sucessfull');
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
  getLocation,
  addLocation,
}