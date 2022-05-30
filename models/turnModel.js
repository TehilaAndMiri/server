const { MongoCredentials } = require("mongodb");
const mongoose = require("mongoose");
const number = require("mongoose/lib/cast/number");
const { String, Date } = require("mongoose/lib/schema/index");
const { timeout } = require("nodemon/lib/config");
const Schama = mongoose.Schema;

const turnModel = new Schama({
    turnName: {
        type: String,
    },
    doctorName: {
        type: String,
    }, 
    date: {
        type: Date,
        min: Date.now() 
    },
    time: {
        type: Date.time(),
    },
    place: {
        type: String,
    },
    whatToBring: {
        type: String, 
    },
   
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "member"
    },
  
})

module.exports = mongoose.model("apartment", turnModel);