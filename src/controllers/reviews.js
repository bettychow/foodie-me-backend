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
  const data = model.updateReviewVotes(req.body.updatedVotes, req.params.id)
  data
    .then(result => {
      console.log('result in updateReveiwVotes ctrl', result)
      res.status(200).json(result)
    })
}

const updateReview = (req, res) => {
  const data = model.updateReview(req.body, req.params.id)
  data
    .then(result => {
      res.status(200).json(result)
    })
}

const deleteReview = (req, res) => {

  console.log('req.params in deleteReview ctrl', req.params )
  const data = model.deleteReview(req.params.id)
  data
    then(result => {
      res.status(200).json(result)
    })
}


module.exports = {
  getAllReviews,
  getCurrentReview,
  addReview,
  updateReviewVotes,
  updateReview,
  deleteReview
}