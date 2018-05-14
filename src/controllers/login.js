const model = require('../models/login')

const login = (req, res) => {
  console.log('req.body in login ctrl', req.body)
  const data = model.checkLogin(req.body)
   data
     .then(result => {
       
       if(result.error) {
         res.status(403).json({error: {message: 'Could not login', errors: result.error}})
       } else {
           res.status(200).json(result)
        }
      })
}

module.exports = { login }