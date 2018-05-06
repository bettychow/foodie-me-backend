const knex = require('./db')

const getAllReviews = () => {
  
  return knex('reviews')
    .select('*')
}

const getCurrentReview = (review_id) => {
  console.log('review_id in queries', review_id)
  return knex('reviews')
    .select('*')
    .join('restaurants','restaurants.id', '=', 'restaurant_id')
    .where('reviews.id', review_id)
}

const updateReview = (body, review_id) => {
  return knex('reviews')
    .where('reviews.id', review_id)
    .update(body)

}

module.exports = {
  getAllReviews,
  getCurrentReview,
  updateReview
}