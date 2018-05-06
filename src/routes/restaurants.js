const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/restaurants')

router.get('/:user_id', ctrl.getUserRestaurants)
router.post('/', ctrl.addRestaurant)

module.exports = router