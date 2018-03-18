const express = require('express')
const router = express.Router()
const product = require('../models/product')

/* GET users listing. */

router.post('/insert', (req,res,next) =>{
  let newProduct = new product({
   name:req.body.name,
   description:req.body.description,
   price:req.body.price
  })
   newProduct.save()
   return res.sendStatus(200)
})

router.get('')
module.exports = router
