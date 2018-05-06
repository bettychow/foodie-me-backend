const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/reviews')

router.get('/', ctrl.getAllReviews)
router.get('/:id', ctrl.getCurrentReview)
router.put('/:id', ctrl.updateReview)



//router.post('/:user_id', ctrl.addReview)

module.exports = router