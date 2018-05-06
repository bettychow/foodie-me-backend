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
  updateReview
}