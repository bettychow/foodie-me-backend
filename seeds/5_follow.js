
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('follow').del()
    .then(function () {
      // Inserts seed entries
      return knex('follow').insert([
        {followed_id: 1, follower_id: 2}
      ]);
    });
};


