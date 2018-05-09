
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, user_id: 1, username: 'bettychow', restaurant_id: 1, yelp_id: 'd21yLIv0j4Cc2WVNsQAmZw', title: 'Must go', comment: 'Everything is yummy there, especially the clay pot rice', dishes: 'Clay pot rice with fish roe, grilled cow\'s tongue', food_rating: 4, service_rating: 3, votes: 5, pic_01:'https://s.hdnux.com/photos/54/01/23/11539661/11/rawImage.jpg', pic_02: '', pic_03: '', pic_04: '' }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`
      )
    })
};
