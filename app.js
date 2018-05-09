const express = require('express') 
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(cors())
app.use(bodyParser.json())
app.disable('x-powered-by')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))

const usersPath = require('./src/routes/users')
const reviewsPath = require('./src/routes/reviews')
const restaurantsPath = require('./src/routes/restaurants')
const signupPath = require('./src/routes/signup')
const loginPath = require('./src/routes/login')
const favoritePath = require('./src/routes/favorite')

app.use('/users', usersPath)
app.use('/restaurants', restaurantsPath )
app.use('/reviews', reviewsPath)
app.use('/signup', signupPath)
app.use('/login', loginPath)
app.use('/favorite', favoritePath)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err})
})

app.use((req, res, next) => {
  res.status(404).json({ error : { message: "Not found!!!"}})
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app