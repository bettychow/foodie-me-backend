const signup = require('../../queries/signup')


const createAcct = ({name, username, email, password}) => {
  const signupRes = signup.createAcct(name, username, email, password)
  return signupRes
    .then(result => {
      return result
    })
}

module.exports =  { createAcct }