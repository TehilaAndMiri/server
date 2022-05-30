const { MongoCredentials } = require("mongodb");
const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const userSchama = new Schama({
    firstName: {
        type: String,
       // required: true,
        minlength: 2
    },
    lastName: {
        type: String,
       // required: true,
        minlength: 2
    },
   
        apartmentsId: [
            {
            type: Number, 
            minlength:1,
            required: true  
            }],          
    email: {
        type: String,
       // required: true,
        minlength: 5,
        unique:true,
    },
    password: {
        type: String,
      //  required: true,
        minlength: 6
    },
    phoneNumber: {
        type: String,
       // required: true,
        minlength: 9
    },
    status:{
        type:String,
       // required:true,
        enum:["menaelet","racezet","madricha","achot"],
        default:"madricha"
    },  
}) 
   

module.exports = mongoose.model('user', userSchama);