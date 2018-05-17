const model = require('../models/follow')

const getUsersFollowed = (req, res) => {
  
  const data = model.getUsersFollowed(req.params.follower_id)
  return data
    .then(result => {
      res.status(200).json(result)
    })
}

const updateUserFollowed = (req, res) => {
  console.log(req.body)
  const data = model.updateUserFollowed(req.body)
  data
    .then(result => {
      res.status(201).json(result)
    })
}

module.exports = { getUsersFollowed, updateUserFollowed }