const knex = require('./db')

const updateReviewVotes = (votes, review_id) => {

  return knex('reviews')
    .select('*')
    .join('restaurants','restaurants.id', '=', 'restaurant_id')
    .where('reviews.id', review_id)
    .update({ votes })
    .returning('*')
}

module.exports = {
  updateReviewVotes
}