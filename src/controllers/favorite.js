const model = require('../models/favorite')
 
const getUserFavorites = (req, res) => {
  console.log('res.params in getUserRes in ctrl', req.params)
  const data = model.getUserFavorites(req.params.id)
  data
    .then(result => {
      res.status(200).json(result)
    })
}

const updateUserFavorites = (req, res) => {
  const data = model.updateUserFavorites(req.body) 
  data
    .then(result => {
      res.status(201).json(result)
    })

}

const deleteUserFavorite = (req, res) => {
  console.log('req.body in deleteIserFavorite in controller', req.body)
  const data = model.deleteUserFavorite(req.body.user_id, req.body.restaurant_id)
  data
    .then(result => {
      res.status(200).json(result)
    })
}

module.exports = {
  getUserFavorites,
  updateUserFavorites,
  deleteUserFavorite
}