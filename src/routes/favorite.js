const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/favorite')

router.get('/:id', ctrl.getUserFavorite)
router.post('/', ctrl.updateUserFavorites)

module.exports = router