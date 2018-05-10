const favorite = require('../../queries/favorite')


const getUserFavorites = (user_id) => {

  console.log('user_id in getUserFavorite in model', user_id)
  const userRestaurants = favorite.getUserFavorites(user_id)

  return userRestaurants
    .then(result => {
      return result
    })
}

const updateUserFavorites = (body) => {
  const user_id = Number(body.user_id)
  const restaurant_id = Number(body.restaurant_id)
  const updatedFavorite = favorite.updateUserFavorites(user_id, restaurant_id)
  return updatedFavorite
    then(result => {
      console.log('result in updateUserFavorite in model', result)
      return result
    })
}

const deleteUserFavorite = (user_id, restaurant_id) => {
  const favoriteDeleted = favorite.deleteUserFavorite(Number(user_id), Number(restaurant_id))
  return favoriteDeleted
    .then(result => {
      return result
    })
}

module.exports = {
  getUserFavorites,
  updateUserFavorites,
  deleteUserFavorite
}