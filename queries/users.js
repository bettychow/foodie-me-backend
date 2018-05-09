const knex = require('./db')

const getUserInfo = (username) => {

  console.log('username in users queries', username)
  return knex('users')
    .select('*')
    .where('username', username)
}

const updateUserInfo = (info, username) => {
  const profile_pic = info.profile_pic
  const bio = info.bio

  return knex('users')
    .where('username', username)
    .update({profile_pic, bio})
    .returning('*')
}

module.exports = {
  getUserInfo,
  updateUserInfo
}