const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/reviews')

router.get('/', ctrl.getAllReviews)
router.get('/:id', ctrl.getCurrentReview)
router.post('/', ctrl.addReview)
router.patch('/:id', ctrl.updateReviewVotes)
router.put('/:id', ctrl.updateReview)
router.delete('/:id', ctrl.deleteReview)



//router.post('/:user_id', ctrl.addReview)

module.exports = router