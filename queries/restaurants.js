const knex = require('./db')

const getUserRestaurants = (user_id) => {

  return knex('restaurants')
    .select('restaurants.id AS restaurant_id', 'restaurant_name', 'yelp_id', 'address', 'phone', 'pic', 'username', 'lat', 'lng')
    .join('users_restaurants', 'restaurant_id', '=', 'restaurants.id' )
    .join('users', 'users.id', '=', 'users_restaurants.user_id')
    .where('users_restaurants.user_id', Number(user_id))
    
}

const getRestaurant = restaurant_id => {
  return knex('restaurants')
    .select('*')
    .where('restaurants.id', restaurant_id)
}

const addRestaurant = body => {
  return knex
    .insert(body)
    .into('restaurants')
    .returning('*')
}

const updateUserFavorites = (user_id, restaurant_id) => {
  return knex
    .insert({user_id, restaurant_id})
    .into('users_restaurants')
    .returning('*')

}

module.exports = {
  getRestaurant,
  getUserRestaurants,
  addRestaurant,
  updateUserFavorites
}