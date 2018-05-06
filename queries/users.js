const knex = require('./db')

const getUserInfo = (username) => {

  return knex('users')
    .select('*')
    .where('username', username)
}

module.exports = {
  getUserInfo
}