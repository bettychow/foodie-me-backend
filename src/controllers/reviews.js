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

const addReview = (req, res) => {
  const data = model.addReview(req.body)

  data
    .then(result => {
      res.status(201).json(result)
    })
}

const updateReviewVotes = (req, res) => {
  console.log('ggggggg', req.body, req.params.id)
  const data = model.updateReviewVotes(req.body.updatedVotes, req.params.id)
  data
    .then(result => {
      console.log('result in updateReveiwVotes ctrl', result)
      res.status(200).json(result)
    })
}

const updateReview = (req, res) => {
  const data = model.updateReview(req.body, req.params.id)
}


module.exports = {
  getAllReviews,
  getCurrentReview,
  addReview,
  updateReviewVotes,
  updateReview
}