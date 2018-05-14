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
    connection: 'postgres://sbvbpanwxemnwq:73324f9a1a1af1002decae1756e18e250951005f127e24ad63637719bb1ed141@ec2-75-101-142-91.compute-1.amazonaws.com:5432/d2o3nke6adq33j',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};