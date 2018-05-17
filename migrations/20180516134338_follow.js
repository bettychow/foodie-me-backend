
exports.up = function(knex, Promise) {
  return knex.schema.createTable('follow', table => {
    table.integer('followed_id').notNullable()
    table.foreign('followed_id').references('users.id').onDelete('CASCADE')
    table.integer('follower_id').notNullable()
    table.foreign('follower_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('follow')
};
