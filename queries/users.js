const knex = require('./db')

const getUserInfo = (username) => {

  console.log('username in users queries', username)
  return knex('users')
    .select('*')
    .where('username', username)
}

module.exports = {
  getUserInfo
}