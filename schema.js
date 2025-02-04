const mongoose=require('mongoose')
const restaurantSchema=new mongoose.Schema({
  name:{
    type:String,
  required:true
  },
  city:{
    type:String,
    required:true
  },
  itemsArray:{
    type:[String]
  }
})

const itemDetailsSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
})

const items = mongoose.model('Items',itemDetailsSchema)
const restaurant = mongoose.model('Restaurant',restaurantSchema)
module.exports(items)
module.exports(restaurant)