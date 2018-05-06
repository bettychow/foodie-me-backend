const users = require('../../queries/users')

const getUserInfo = (username) => {
  
  const userInfo = users.getUserInfo(username)
  return userInfo
    .then(result => {
      console.log('result in getUserInfo model', result)
      return result
    })
}

module.exports = {
  getUserInfo
}