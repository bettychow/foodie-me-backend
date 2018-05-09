const reviews = require('../../queries/reviews')

const getAllReviews = () => {
 
  const userReviews = reviews.getAllReviews()
  return userReviews
    .then(result => {
      console.log('result in getUserReviews model', result)
      return result
    })
}

const getCurrentReview = review_id => {
  console.log('review_id in getCurrentReview model', review_id)
  const currentReview = reviews.getCurrentReview(Number(review_id))
  return currentReview
    .then(result => {
      console.log('result in getCurrentReview model', result)
      return result
    })
}

const addReview = (body) => {
  const newReview = reviews.addReview(body)
  return newReview
    .then(result => {
      console.log('result in addReview model', result)
      return result 
    })
}

const updateReviewVotes = (votes, review_id) => {
  const updatedReview = reviews.updateReviewVotes(votes, review_id)
  return updatedReview
    .then(result => {
      console.log('result in updatedReviewVotes model', result)
      return result
    })
}

const updateReview = (body, review_id) => {
  const reviewUpdated = reviews.updateReview(body, Number(review_id))
    return reviewUpdated
      .then(result => {
        return result
      })

}

module.exports ={
  getAllReviews,
  getCurrentReview,
  addReview,
  updateReviewVotes,
  updateReview
}