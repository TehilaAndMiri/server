const { MongoCredentials } = require("mongodb");
const mongoose = require("mongoose");
const number = require("mongoose/lib/cast/number");
const { String } = require("mongoose/lib/schema/index");
const Schama = mongoose.Schema;

const apartmentModel = new Schama({
     
   
   
   apartmentId: {
        type: Number, 
        minlength:1,
        required: true      
    },

     membersId: [
        {
         type: String, 
        minlength:1,
        required: true  
        }],  
})




module.exports = mongoose.model("apartment", apartmentModel);