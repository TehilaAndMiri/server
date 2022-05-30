const { MongoCredentials } = require("mongodb");
const mongoose = require("mongoose");
const number = require("mongoose/lib/cast/number");
const { String } = require("mongoose/lib/schema/index");
const Schama = mongoose.Schema;

const memberModel = new Schama({    
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2
    },
    Id: {
        type: String, 
        minlength: 9,
        required: true
    },
    HMO: {
        type:String,
        required:true,
        enum:["Leumit","Meuchedet","Macabi","Clalit"],
    
    },  
    // apartment: 
    //     {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"apartment",
    //     required: false  

    //     },
})
module.exports = mongoose.model("member", memberModel);