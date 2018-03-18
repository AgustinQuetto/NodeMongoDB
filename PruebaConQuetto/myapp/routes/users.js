const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

router.get('/hola/:name',(req,res,next) => {
  res.send('gei'+ req.params.name)
})

router.post('/hola',(req,res,next) => {
  res.send('hola puto' + req.body.name)
})

module.exports = router
