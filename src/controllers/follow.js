const model = require('../models/follow')

const getUsersFollowed = (req, res) => {
  console.log('req.params in getUsersFollowed in ctrl', req.params)
  const data = model.getUsersFollowed(req.params.follower_id)
  return data
    .then(result => {
      res.status(200).json(result)
    })
}

module.exports = { getUsersFollowed }