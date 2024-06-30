const { default: mongoose } = require("mongoose");


const cartSchema= new mongoose.Schema({
    userid:mongoose.Types.ObjectId,
    productid:mongoose.Types.ObjectId
});

export const  cart= mongoose.models.carts
|| mongoose.model("carts",cartSchema);