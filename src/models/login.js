const login = require('../../queries/login')
const jwt = require('jsonwebtoken')

const checkLogin = ({email, password}) => {
  console.log('email and password in models login', email, password)
  const auth = login.checkLogin(email, password)
  return auth
    .then(result => {
      if (result === false) {
         console.log(result, 'we got false in model');
        return { error: 403, message: 'Username or pass did not match' }
      } else {
         console.log(result, 'we got id in model');
        let jwtPayload = {
          sub: {
            id: result.id,
            username: result.username
          },
          loggedIn: true,
          exp: Date.now() / 1000 + 10000
        }
        const token = jwt.sign(jwtPayload, 'process.env.SECRET')
        const decode = jwt.verify(token, 'process.env.SECRET')

        console.log('tttttttt', token)
        return token
      }
    })
}

module.exports = { checkLogin }