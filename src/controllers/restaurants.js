const model = require('../models/restaurants')

const getAllRestaurants = (req, res) => {
  const data = model.getAllRestaurants()
  data
    .then(result => {
      res.status(200).json(result)
    })
}

const getRestaurant = (req, res) => {
  const data = model.getRestaurant(req.params.id)

  data
    .then(result => {
      res.status(200).json(result)
    })
}

const addRestaurant = (req, res) => {
  const data = model.addRestaurant(req.body)
  data
    .then(result => {
      res.status(201).json(result)
    })
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant
}