const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.get('/:username', ctrl.getUserInfo)
router.patch('/:username', ctrl.updateUserInfo)

module.exports = router