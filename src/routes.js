var express = require('express');
var router = express.Router();
const handler = require('./handler')

router.post('/register', handler.registerUser)
router.post('/login', handler.loginUser)
router.get('/location', handler.getLocation)
router.post('/location', handler.addLocation)

module.exports = router;