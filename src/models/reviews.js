const reviews = require('../../queries/reviews')

const getAllReviews = () => {
 
  const userReviews = reviews.getAllReviews()
  return userReviews
    .then(result => {
      return result
    })
}

const getCurrentReview = review_id => {
  const currentReview = reviews.getCurrentReview(Number(review_id))
  return currentReview
    .then(result => {
      return result
    })
}

const addReview = (body) => {
  const newReview = reviews.addReview(body)
  return newReview
    .then(result => {
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

const deleteReview = (review_id) => {

  const reviewDeleted = reviews.deleteReview(Number(review_id))
    return reviewDeleted
      .then(result => {
        return result
      })
}

module.exports ={
  getAllReviews,
  getCurrentReview,
  addReview,
  updateReview,
  deleteReview
}