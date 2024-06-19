const { default: mongoose } = require("mongoose");


const productModel= new mongoose.Schema({
    name:String,
    price:String,
    img_path:String,
    description:String,
    usedfor:String,
    Brand:String
});

export const  ProductSchema= mongoose.models.products
|| mongoose.model("products",productModel);