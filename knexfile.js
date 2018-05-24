module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/foodie_me_dev'
  },
  test: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
  },
  production: {
    client: 'pg',
    connection: 'postgres://vihrevlsvhjzyt:76e5c0d254e9f81c94172b8b4377fffa8de99f8d368bff3834e4127ca5c08c54@ec2-23-21-129-50.compute-1.amazonaws.com:5432/df6jn21cnna8eb',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};