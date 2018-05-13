const votes = require('../../queries/votes')

const updateReviewVotes = (updatedVotes, review_id) => {
  
  const updatedReview = votes.updateReviewVotes(Number(updatedVotes), Number(review_id))

  return updatedReview
    .then(result => {
     console.log('result in updateReviewVotes model', result)
      return result
    })
}

module.exports = {
  updateReviewVotes
}