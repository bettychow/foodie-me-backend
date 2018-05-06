
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username').notNullable().defaultsTo('')
    table.string('name').notNullable().defaultsTo('')
    table.string('email').notNullable().defaultsTo('')
    table.string('password').defaultsTo('')
    table.string('profile_pic').notNullable().defaultsTo('')
    table.string('bio').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
