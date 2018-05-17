const knex = require('./db')

const getUsersFollowed = (follower_id) => {
  return knex('follow')
    .select('*')
    .join('users', 'users.id', '=', 'followed_id')
    .where('follower_id', follower_id)
}

const updateUserFollowed = (followed_id, follower_id) => {
  return knex
    .insert({followed_id, follower_id})
    .into('follow')
    .returning('*')
}

module.exports = { getUsersFollowed, updateUserFollowed }