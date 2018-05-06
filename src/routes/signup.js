const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/signup')

router.post('/', ctrl.signup)

module.exports = router