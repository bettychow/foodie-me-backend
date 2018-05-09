const model = require('../models/favorite')
 
const getUserFavorite = (req, res) => {
  console.log('res.params in getUserRes in ctrl', req.params)
  const data = model.getUserFavorite(req.params.id)
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

module.exports = {
  getUserFavorite,
  updateUserFavorites
}