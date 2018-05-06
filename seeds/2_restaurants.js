
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, restaurant_name: 'Gochi Japanese Fusion Tapas', yelp_id: 'd21yLIv0j4Cc2WVNsQAmZw', address:'19980 E Homestead Rd Cupertino, CA 95014', phone:'(408) 725-0542', pic: 'https://s3-media2.fl.yelpcdn.com/bphoto/uN3aEULD68EXS5PIWcV7FQ/o.jpg'},
        {id: 2, restaurant_name: 'YAYOI', yelp_id: 'SMVEtOV6PG467oZqyNRhAw', address: '20682 Homestead Rd Cupertino, CA 95014', phone: '(408) 564-8852', pic: 'https://s3-media4.fl.yelpcdn.com/bphoto/GVivqEV5C1vGaVsYze5Tlw/o.jpg'},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants));`
      )
    })
};
