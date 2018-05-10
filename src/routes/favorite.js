const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/favorite')

router.get('/:id', ctrl.getUserFavorites)
router.post('/', ctrl.updateUserFavorites)
router.delete('/', ctrl.deleteUserFavorite)

module.exports = router