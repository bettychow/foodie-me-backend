const restaurants = require('../../queries/restaurants')

const getUserRestaurants = (user_id) => {
  const userRestaurants = restaurants.getUserRestaurants(user_id)

  return userRestaurants
    .then(result => {
      console.log('result in getUserRestaurants in model', result)
      return result
    })

}

module.exports = {
  getUserRestaurants
}