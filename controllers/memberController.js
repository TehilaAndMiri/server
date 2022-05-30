const memberModel = require('../models/memberModel');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


module.exports.updateMember = async function (req, res, next) {
  if (req.body) {
    try {
      const detailsId = ObjectId(req.params.id);
      const { firstName, lastName, id, HMO, apartmentId } = req.body;
      const data = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        HMO: HMO,
        apartmentId:apartmentId
      }
      const updateMember = await memberModel.findByIdAndUpdate(detailsId, data, {
        new: true
      });
      res.send(updateMember);
    }
    catch (error) {
      next(error);
    }
  }
}



module.exports.postMember = async function (req, res, next) {
  try {
    const member = new memberModel(req.body);
    const inserted= await member.save();
    res.send(inserted)
  }
  catch (error) {
    next(error);
  }

}