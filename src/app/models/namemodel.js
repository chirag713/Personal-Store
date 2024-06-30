const { default: mongoose } = require("mongoose");


const nameSchema= new mongoose.Schema({
    name:String,
    usedfor:String,
});

export const  Name= mongoose.models.names
|| mongoose.model("names",nameSchema);