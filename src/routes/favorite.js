const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/favorite')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

  const secret = 'process.env.SECRET'
  const token = req.headers.authorization
  console.log('ttttttooooooo in route', token)
  const verified = jwt.verify(token , secret, (err, result) => {
    if(err) {
      //return next({ err: {status: 403, message: 'Cannot verify jwt'}})
      // return res.send()
      return res.json({status: 403, error: err});
    } 
  })
  next()
}

router.get('/:id', ctrl.getUserFavorites)
router.post('/', ctrl.updateUserFavorites)
router.delete('/', verifyToken, ctrl.deleteUserFavorite)

module.exports = router