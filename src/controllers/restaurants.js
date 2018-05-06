const model = require('../models/restaurants')

const getUserRestaurants = (req, res) => {
  const data = model.getUserRestaurants(req.params.user_id)
  data
    .then(result => {
      res.status(200).json(result)
    })
}

const addRestaurant = () => {


}

module.exports = {
  getUserRestaurants,
  addRestaurant
}