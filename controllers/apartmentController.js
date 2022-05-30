const apartmentModel = require('../models/apartmentModel');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


module.exports.postApartment = async function (req, res, next) {
    try {
      const apartment = new apartmentModel(req.body);
      const inserted= await apartment.save();
      res.send(inserted)
    }
    catch (error) {


      
      next(error);
    }

}


