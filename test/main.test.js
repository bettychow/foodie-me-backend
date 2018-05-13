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

  describe('#GET /reviews', () => {
    it('Should return all reviews', () => {
      chai.request(server)
        .get('/reviews')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('array')
        })
    })
  })

  describe('#GET /reviews/reviewId', () => {
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

  describe('#POST /reviews', () => {
    it('Should add a new review', done => {
      chai.request(server)
        .post('/reviews')
        .send({
          user_id: 1,
          username: 'bettychow',
          restaurant_id: 2,
          title: 'Efficient service and decent foods',
          comment: 'Efficient service and decent foods',
          dishes: 'Curry Katsu, Chirashi',
          food_rating: 4,
          service_rating: 4,
          pic_01: '',
          pic_02: '',
          pic_03: '',
          pic_04: ''
        })
        .end((err, res) => {
          res.should.have.status(201)
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

  describe('#PATCH /reviews/reviewId', () => {
    it('Should update a review', done => {
      const reviewId = 1
      chai.request(server)
        .patch(`/reviews/${reviewId}`)
        .send({
          comment: 'Value for money. Portion is just right. Foods are decent.'
        })
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

  describe('#DELETE /reviews/reviewId', () => {
    it('Should delete a review', done => {
      const reviewId = 1
      chai.request(server)
        .delete(`/reviews/${reviewId}`)
        .end((err, res) => {
          res.should.have.status(204)
        })
    })
  })

  describe('#GET /favorite/userId', () => {
    it('Should get a user\'s list of favorite restaurants ', done => {
      const userId = 1
      chai.request(server)
        .get(`/favorite/${userId}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body[0].username.should.equal('bettychow')
          done()
        })
    })
  })

  describe('#POST /favorite', () => {
    it('Should add a user\'s favorite restaurant', done => {
        chai.request(server)
          .post('/favorite')
          .send({
            user_id: 2,
            restaurant_id: 2
          })
          .end((err, res) => {
            res.should.have.status(201)
            res.body.should.be.a('array')
            res.body[0].user_id.should.equal(2)
            done()
          })
    })
  })

  describe('#DELETE /favorite', () => {
    it('Should delete a user\'s favorite restaurant', done => {
      chai.request(server)
        .delete('/favorite')
        .send({
          user_id: 2,
          restaurant_id: 2
        })
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

  describe('#GET /restaurants', () => {
    it('Should get all the restaurants in database', done => {
      chai.request(server)
        .get('/restaurants')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          done()
        })
    })
  })

  describe('#GET /restaurants/restaurantId', () => {
    it('Should get info of one restaurant', done => {
      const restaurant_id = 1
    chai.request(server)
      .get(`/restaurants/${restaurant_id}`)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.should.have.lengthOf(1)
        res.body[0].id.should.equal(restaurant_id)
        done()
      })
    })
  })
   
  describe('#POST /restaurants', () => {
    it('Should get info of one restaurant', done => {
    chai.request(server)
      .post(`/restaurants`)
      .send({
        restaurant_name: 'Red Hot Wok',
        pic: 'https://s3-media4.fl.yelpcdn.com/bphoto/J4n66daJwN9tjw_7E64t7g/o.jpg',
        address: '10074 E Estates Dr Cupertino, CA 95014',
        phone: '(408) 996-2999',
        lat: 37.32199,
        lng: -122.01495,
        yelp_id: 'NZPHTkXarsLEbZlnyieD-Q'
      })
      .end((err, res) => {
        res.should.have.status(201)
        res.body.should.be.a('array')
        res.body.should.have.lengthOf(1)
        res.body[0].restaurant_name.should.equal('Red Hot Wok')
        done()
      })
    })
  })

  describe('#GET /users/username', () => {
    it('Should get all users info', done => {
      const username = 'bettychow'
      chai.request(server)
        .get(`/users/${username}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body[0].username.should.equal(username)
          done()
        })
    })
  })

  describe('#PATCH /users/username', () => {
    it('Should update user info', done => {
      const username = 'bettychow'
      chai.request(server)
        .patch(`/users/${username}`)
        .send({
          bio: 'I love foods'
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body[0].bio.should.equal('I love foods')
          done()
        })
    })
  })
    
  describe('#PATCH /votes/reviewId', () => {
    it('Should update the votes of a review', done => {
      const reviewId = 1
      chai.request(server)
        .patch(`/votes/${reviewId}`)
        .send({
          updatedVotes: 6
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body[0].id.should.equal(reviewId)
          done()
        })
    })
  })

  describe('#POST /signup', () => {
    it('Should create new user account', done => {
      chai.request(server)
        .post('/signup')
        .send({
          name: 'My Melody',
          username: 'mymelody',
          email: 'mymelody@gmail.com',
          password: 'iammelody'
        })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('array')
          res.body[0].username.should.equal('mymelody')
          done()
        })
    })
  })

  describe('#POST /login', () => {
    it('Should allow user to login and return a token', done => {
      chai.request(server)
        .post('/login')
        .send({
          email: 'bettychchow@gmail.com',
          password: 'iambetty'
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('string')
          done()
        })
    })

    it('Should throw error if user cannot not be verified', done => {
      chai.request(server)
        .post('/login')
        .send({
          email: 'bettychchow@gmail.com',
          password: 'iamkitty'
        })
        .end((err, res) => {
          res.should.have.status(403)
          done()
        })
    })
  })
})
