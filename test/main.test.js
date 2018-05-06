require("dotenv").load()
const chai = require("chai")
      should = chai.should()
      chaiHttp = require("chai-http")
      server = require("../app")
      config = require("../knexfile").test
      bcrypt = require('bcryptjs')

chai.use(chaiHttp)
chai.use(require("chai-as-promised"))

describe('API Routes', () => {
  beforeEach(() => {
    const tmpConnection = require('knex')({ client: 'pg', connection: process.env.DATABASE_URL })
    return tmpConnection.raw(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
      .catch(() => Promise.resolve('Everything is OK'))
      .then(() => global.knex = require('../queries/db'))
      .then(() => knex.migrate.rollback(config))
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#GET reviews/reviewId/', () => {
        it('Should return a review', done => {
          const reviewId = 1
          chai.request(server)
            .get(`/reviews/${reviewId}`)
            .end((err, res) => {
              res.should.have.status(200)
              res.should.be.json
              res.body.should.be.a('array')
              res.body[0].should.have.property('id')
              res.body[0].should.have.property('user_id')
              res.body[0].should.have.property('restaurant_id')
              res.body[0].should.have.property('title')
              res.body[0].should.have.property('comment')
              res.body[0].should.have.property('dishes')
              res.body[0].should.have.property('id')
              res.body[0].should.have.property('food_rating')
              res.body[0].should.have.property('service_rating')
              res.body[0].should.have.property('votes')
              res.body[0].should.have.property('id')
              res.body[0].should.have.property('pic_01')
              res.body[0].should.have.property('pic_02')
              res.body[0].should.have.property('pic_03')
              res.body[0].should.have.property('pic_04')
              done()
            })
        })
      })

      describe('#POST reviews/reviewId', () => {
        it('Should update a review', done => {
          const reviewId = 1
          chai.request(server)
            .post(`/reviews/${reviewId}`)
            .end((err, res) => {
              res.should.have.status(204)
              res.should.be.json
              
              done()

            })
        })
      })

  

    

    

    

    

    
})
