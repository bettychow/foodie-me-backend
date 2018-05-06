const knex = require('./db')

const getUserRestaurants = (username) => {

  return knex('restaurants')
    .select('restaurants.id AS restaurant_id', 'restaurant_name', 'yelp_id', 'address', 'phone', 'pic', 'username')
    .join('users_restaurants', 'restaurant_id', '=', 'restaurants.id' )
    .join('users', 'username', '=', 'users_restaurants.username')
    .where('users_restaurants.username', username)
    
}

module.exports = {
  getUserRestaurants
}