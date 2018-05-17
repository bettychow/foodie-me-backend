const knex = require('./db')

const getUsersFollowed = (follower_id) => {
  return knex('follow')
    .select('*')
    .join('users', 'users.id', '=', 'followed_id')
    .where('follower_id', follower_id)
}

module.exports = { getUsersFollowed }