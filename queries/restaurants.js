const knex = require('./db')

const getUserRestaurants = (user_id) => {

  return knex('restaurants')
    .select('restaurants.id AS restaurant_id', 'restaurant_name', 'yelp_id', 'address', 'phone', 'pic', 'username')
    .join('users_restaurants', 'restaurant_id', '=', 'restaurants.id' )
    .join('users', 'users.id', '=', 'users_restaurants.user_id')
    .where('users_restaurants.user_id', user_id)
    
}

module.exports = {
  getUserRestaurants
}