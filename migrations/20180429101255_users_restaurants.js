
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_restaurants', table => {
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('restaurant_id').notNullable()
    table.foreign('restaurant_id').references('restaurants.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_restaurants')
};
