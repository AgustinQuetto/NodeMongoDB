const mongoose = require('mongoose'),
      Schema = mongoose.Schema
     
const productSchema = new Schema({
    name:String,
    description:String,
    price:Number
})



module.exports = mongoose.model('Product',productSchema)