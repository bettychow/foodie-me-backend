const restaurants = require('../../queries/restaurants')


const getUserFavorite = (user_id) => {

  console.log('user_id in getUserFavorite in model', user_id)
  const userRestaurants = restaurants.getUserRestaurants(user_id)

  return userRestaurants
    .then(result => {
      console.log('result in getUserRestaurants in model', result)
      return result
    })

}

const updateUserFavorites = (body) => {
  const user_id = Number(body.user_id)
  const restaurant_id = Number(body.restaurant_id)
  const updatedFavorite = restaurants.updateUserFavorites(user_id, restaurant_id)
  return updatedFavorite
    then(result => {
      console.log('result in updateUserFavorite in model', result)
      return result
    })
}

module.exports = {
  getUserFavorite,
  updateUserFavorites
}