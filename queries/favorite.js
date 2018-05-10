const knex = require('./db')

const getUserFavorites = (user_id) => {

  return knex('restaurants')
    .select('restaurants.id AS restaurant_id', 'restaurant_name', 'yelp_id', 'address', 'phone', 'pic', 'username', 'lat', 'lng')
    .join('users_restaurants', 'restaurant_id', '=', 'restaurants.id' )
    .join('users', 'users.id', '=', 'users_restaurants.user_id')
    .where('users_restaurants.user_id', Number(user_id))
    
}

const updateUserFavorites = (user_id, restaurant_id) => {
  return knex
    .insert({user_id, restaurant_id})
    .into('users_restaurants')
    .returning('*')

}

const deleteUserFavorite = (user_id, restaurant_id) => {
    return knex('users_restaurants')
      .where('user_id', user_id)
      .andWhere('restaurant_id', restaurant_id)
      .del()
}



module.exports = {
  getUserFavorites,
  updateUserFavorites,
  deleteUserFavorite
}