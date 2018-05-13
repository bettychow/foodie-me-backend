const signup = require('../../queries/signup')


const createAcct = ({name, username, email, password}) => {
console.log('PPPPPP', password)



const signupRes = signup.createAcct(name, username, email, password)

return signupRes
  .then(result => {
    return result
  })
}


module.exports =  { createAcct }