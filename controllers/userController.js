const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const apartmentModel = require('../models/apartmentModel');
const memberModel = require('../models/memberModel');
const { json } = require('express/lib/response');


module.exports.getUserByEmailPassword = async function (req, res, next) {
 
    if (req.query) {
        const email = req.query.email
        const password = req.query.password
        let memberArr=[];
        try {
           let currentUser = await userModel.findOne({email:email, password:password });
           let apartments = await apartmentModel.find({apartmentId:currentUser.apartmentsId});
           console.log(apartments);

           console.log(apartments[0].membersId[0]);
         
        for (const apart of apartments) {
            for(const member of apart.membersId){
                currentMember=  await memberModel.findOne({Id:member});
                memberArr.push(currentMember);
            }
        }
        
            if (!currentUser){
                alert("אינך קיימת במערכת");
                throw 'user not exist';
            }
            JSON.stringify(memberArr);
          res.send(memberArr); 
        }
        catch (error) {
          next(error);
        }
    }
}



module.exports.postUser = async function (req, res, next) {
    try {
      const user = new userModel(req.body);
      const inserted= await user.save();
      res.send(inserted)
    }
    catch (error) {
      next(error);
    }

}


module.exports.GetById = async function (req, res, next) {
    try {
        const apartments = req.params.id;
        const data = await userModel.find(apartments)
         res.send( data);
    }
    catch (error) {
        next(error);
    }
}


