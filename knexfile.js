module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/foodie_me_dev'
  },
  test: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  }
};