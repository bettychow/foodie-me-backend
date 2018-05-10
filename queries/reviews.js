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

const addReview = (body) => {
  console.log('body in addReview quesries', body)
  return knex
    .insert(body)
    .into('reviews')
    .returning('*')
    
}

const updateReviewVotes = (votes, review_id) => {
  return knex('reviews')
    .select('*')
    .join('restaurants','restaurants.id', '=', 'restaurant_id')
    .where('reviews.id', review_id)
    .update({ votes: Number(votes) })
    .returning('*')
}

const updateReview = (body, review_id) => {
  return knex('reviews')
    .where('reviews.id', review_id)
    .update(body)
}

const deleteReview = (review_id) => {
  console.log('???????////// in queries', review_id )
  return knex('reviews')
    .where({id: review_id})
    .del()
}

module.exports = {
  getAllReviews,
  getCurrentReview,
  addReview,
  updateReviewVotes,
  updateReview,
  deleteReview
}