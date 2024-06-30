const { default: mongoose } = require("mongoose");


const productSchema= new mongoose.Schema({
    name:String,
    price:String,
    img_path:String,
    description:String,
    usedfor:String,
    Brand:String
});

export const  Product= mongoose.models.products
|| mongoose.model("products",productSchema);