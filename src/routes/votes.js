const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/votes')


router.patch('/:review_id', ctrl.updateReviewVotes)

module.exports = router