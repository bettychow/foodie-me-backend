const model = require('../models/signup')

const signup = (req, res) => {

  const data = model.createAcct(req.body)

  data
    .then(result => {
      res.status(201).json(result)
    })
}

module.exports = { signup }