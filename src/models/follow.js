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

const updateUserFollowed = body => {
  const followed_id = Number(body.followed_id)
  const follower_id = Number(body.follower_id)

  const addedPair = follow.updateUserFollowed(followed_id, follower_id)

  return addedPair
    then(result => {
      console.log('result in updateduserFollowed in model', result)
      return result
    })

}

const deleteUserFollowed = body => {
  const followed_id = Number(body.followed_id)
  const follower_id = Number(body.follower_id)

  const deletedPair = follow.deleteUserFollowed(followed_id, follower_id)

  return deletedPair
    .then(result => {
      console.log('result in deletedUserFollowed in model', result)
      return result
    })
}

module.exports = {
  getUsersFollowed,
  updateUserFollowed,
  deleteUserFollowed
}