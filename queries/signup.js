const knex = require('./db')
const bcrypt = require('bcryptjs')

const createAcct = ( name, username, email, password ) => {
  return knex('users')
    .where('email', email)
    .orWhere('username', username)
    .first()
    .then(found => {
      if(found) {
        if(found.username === username && found.email === email ) {
          return 'Both username and email already exist'
        } else if(found.username === username) {
          return 'Username already exists'
        } else if (found.email === email) {
          return 'Email already exists'
        }
      } else {
        const hashedPassword = hash(password, 10)

        return knex('users')
          .insert({ name, username, email, password: hashedPassword })
          .into('users')
          .returning('*')
      }
    })
}

const hash = (password, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(`${password}`, salt);
  return `${hash}`
}

module.exports = { createAcct }