
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('username').notNullable().defaultsTo('')
    table.integer('restaurant_id').notNullable()
    table.foreign('restaurant_id').references('restaurants.id').onDelete('CASCADE')
    table.string('yelp_id').notNullable().defaultsTo('')
    table.string('title').notNullable().defaultsTo('')
    table.string('comment').notNullable().defaultsTo('')
    table.string('dishes').notNullable().defaultsTo('')
    table.integer('food_rating').notNullable().defaultsTo(0)
    table.integer('service_rating').notNullable().defaultsTo(0)
    table.integer('votes').notNullable().defaultsTo(0)
    table.string('pic_01').notNullable().defaultsTo('')
    table.string('pic_02').notNullable().defaultsTo('')
    table.string('pic_03').notNullable().defaultsTo('')
    table.string('pic_04').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
