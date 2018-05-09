const model = require('../models/users')

const getUserInfo = (req, res) => {

  const data = model.getUserInfo(req.params.username)

  data
    .then(result => {
      res.status(200).json( result )
    })
}

const updateUserInfo = (req, res) => {

    const data = model.updateUserInfo(req.body, req.params.username)
    data
      .then(result => {
        res.status(200).json( result )
      })
}

module.exports = {
  getUserInfo,
  updateUserInfo
}