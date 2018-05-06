const knex = require('./db')
const bcrypt = require('bcryptjs')

const checkLogin = (email, password) => {
  return knex('users')
   .select('id', 'password', 'username' )
   .where('email', email)
   .then(result => {
     if(result.length === 0) {
       return false
     } else if( bcrypt.compareSync(password, result[0].password) === true) {
       console.log('result in queries db', result[0])
       return { id: result[0].id, username: result[0].username }
     } else {
       return false
     }  
   })
}

module.exports = { checkLogin }