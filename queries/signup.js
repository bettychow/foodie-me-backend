const knex = require('./db')
const bcrypt = require('bcryptjs')

const createAcct = ( name, username, email, password ) => {
  return knex('users')
    .where('email', email)
    .first()
    .then(found => {
      if(found) {
        return 'User already exists'
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