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

router.post('/extractFirst',(req,res,next) =>{

   product.findOne({}).exec().then((result) =>{
     return res.json(result)
   },(err) =>{
     return err
   })
})


router.post('/extractIdUrl',(req,res,next) =>{
  let idProducto = req.query.id

  product.findById(idProducto).exec().then((result) =>{
    return res.json(result)
    },(err) =>{
        return err
    })
})

router.post('/deleteIdBody',(req,res,next) => {
  let idProducto = req.body.id

  product.findByIdAndRemove(idProducto).exec().then((result) =>{
    return res.json('Se va a eliminar: [' + result.name + ', ' + result.description + ', '
    + result.price + ']')
    },(err) =>{
        return err
    })
})

router.get('/deleteIdParam/:userID',(req,res,next) => {
  let idProducto = req.params.userID

  product.findByIdAndRemove(idProducto).exec().then((result)=>{
    return res.json('Se va a eliminar: [' + result.name + ', ' + result.description + ', '
    + result.price + ']')
  }),(err) =>{
    return err
  }
})

router.post('/updateById' , (req,res,next) =>{
  let idProducto = req.body.id
  let productoActualizado
  
  product.findByIdAndUpdate(idProducto,{ name:req.body.name ,description:req.body.description,
  price:req.body.price }).exec().then((result)=> {
    return resul
  }),(err) =>{
    return err
  }

  product.findById(idProducto).exec().then((result) =>{
    return res.json('Producto actualizado:  [' + result.name + ', ' + result.description + ', ' 
    + result.price + ']')
    },(err) =>{
        return err
    })
})

router.post('/findParams',(req,res,next) =>{
  let parametros= req.body.parametros
  let palabra
  for(i = 0;i<parametros.lenght;i++)
  {
    
  }
  product.find().exec().then((result)=>{
    res.json(result)
  }),(err) =>{
    return err
  }
})




router.get('/hola',(req,res,next)=>{
  res.render('indexLucas')
})

module.exports = router