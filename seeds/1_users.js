
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bettychow', name: 'Betty Chow', email: 'bettychchow@gmail.com', password:'$2a$10$kdeJ1ToJJpFS424ZvrPJROzxh3SHhmTLe5Ze04dcogJ7gQEyVulL.', profile_pic:'http://res.cloudinary.com/dro7ycwow/image/upload/v1524942534/betty_01_f5itd1.jpg', bio:'I love traveling and trying different types of cuisine'},
        {id: 2, username: 'hellokitty', name: 'Hello Kitty', email: 'tsai.betty@gmail.com', password: '$2a$10$4pVK77KYjGi6JCHWPrsfnOowl4851enZuo80jgr3fMyrjZElY.7Ta', profile_pic: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/wsgtilb9ibbxysybe3mu.png', bio:'My favorite foods are dessert and seafoods!'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
};
