
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id')
    table.string('restaurant_name').notNullable().defaultsTo('')
    table.string('yelp_id').notNullable().defaultsTo('')
    table.string('address').notNullable().defaultsTo('')
    table.string('phone').notNullable().defaultsTo('')
    table.decimal('lat').notNullable().defaultsTo(0)
    table.decimal('lng').notNullable().defaultsTo(0)
    table.string('pic').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
};
