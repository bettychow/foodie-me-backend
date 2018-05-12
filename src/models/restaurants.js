const restaurants = require('../../queries/restaurants')

const getAllRestaurants = () => {
  const allRestaurants = restaurants.getAllRestaurants()
    return allRestaurants
      .then(result => {
        console.log('result in getAllRestaurants in model', result)
        return result
      })
      
}

const getRestaurant = (restaurant_id) => {
    const restaurant = restaurants.getRestaurant(Number(restaurant_id))
    return restaurant
      .then(result => {
        console.log('result in getRestaurant model', result )
        return result
      })
}

const addRestaurant = body => {
  const newRestaurant = restaurants.addRestaurant(body)
  return newRestaurant
    .then(result => {
      console.log('result in addRestaurant in model', result)
      return result
    })
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant
}