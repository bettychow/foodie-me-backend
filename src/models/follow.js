const follow = require('../../queries/follow')

const getUsersFollowed = (follower_id) => {

  console.log('follower_id in getUserFollowed in model', follower_id)
  const followedUsers = follow.getUsersFollowed(Number(follower_id))
  return followedUsers
    then(result => {
      console.log('result in follow model', result)
      return result
    })
}

module.exports = {
  getUsersFollowed
}