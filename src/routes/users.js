const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.get('/:username', ctrl.getUserInfo)


module.exports = router