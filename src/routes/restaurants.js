const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/restaurants')

router.get('/:id', ctrl.getRestaurant)
router.post('/', ctrl.addRestaurant)

module.exports = router