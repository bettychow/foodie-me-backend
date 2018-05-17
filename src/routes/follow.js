const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/follow')

router.get('/:follower_id', ctrl.getUsersFollowed)
router.post('/', ctrl.updateUserFollowed)
router.delete('/', ctrl.deleteUserFollowed)

module.exports = router