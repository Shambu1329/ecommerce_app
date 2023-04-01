const { default: mongoose } = require("mongoose")
const Mongoose=require("mongoose")


let eschema=Mongoose.Schema(
  {
    productID:String,
    productName:String,
    modelNumber:String,
    MRP:String,
    Image:String
  }


)

module.exports=mongoose.model("ecommerce",eschema)