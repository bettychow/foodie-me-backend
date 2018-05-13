const model = require('../models/votes')

const updateReviewVotes = (req, res) => {

  console.log('%%%%%%%%%%%%', req.body.updatedVotes, req.params.review_id)
  const data = model.updateReviewVotes(req.body.updatedVotes, req.params.review_id)
  data
    .then(result => {
      console.log('result in updateReviewVotes ctrl', result)
      res.status(200).json(result)
    })
}

module.exports = {
  updateReviewVotes
}