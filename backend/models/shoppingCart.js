const mongoose = require("mongoose")

const Schema = mongoose.Schema

const itemSchema = new Schema({
    text: {
        type: String,
        required: true,
        
    },
    image :{
        type:String,
        required:true

    },
     price :{
        type:Number,
        required:true

    } 

})

module.exports = mongoose.model("Item", itemSchema)