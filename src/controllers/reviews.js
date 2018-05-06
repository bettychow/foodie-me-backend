const model = require('../models/reviews')

const getAllReviews = (req, res) => {
  console.log(' in getAllReviews')
  const data = model.getAllReviews()

  data
    .then(result => {
      res.status(200).json( result )
    })

}

const getCurrentReview = (req, res) => {
  const data = model.getCurrentReview(req.params.id)

  data
    .then(result => {
      res.status(200).json(result)
    })
}

const updateReview = (req, res) => {
  const data = model.updateReview(req.body, req.params.id)
}


module.exports = {
  getAllReviews,
  getCurrentReview,
  updateReview
}