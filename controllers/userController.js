const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const apartmentModel = require('../models/apartmentModel');
const memberModel = require('../models/memberModel');
const { json } = require('express/lib/response');


module.exports.getUserByEmailPassword = async function (req, res, next) {
 
    if (req.query) {
        // if (req.query.email && req.query.password) {
        const email = req.query.email
        const password = req.query.password
        let member=[];
        try {
           let currentUser = await userModel.findOne({email:email, password:password });
           let apartments = await apartmentModel.find({apartmentId:currentUser.apartmentsId});
           console.log(apartments);

           console.log(apartments[0].membersId[0]);
         
           apartments.forEach ((element) => {            
            element.membersId.forEach(async (e)=> {
                currentMember=  await memberModel.findOne({Id:e});
                member.push(currentMember);
                console.log(member);
                
               });
           });
            if (!currentUser){
                alert("אינך קיימת במערכת");
                throw 'user not exist';
            }
            JSON.stringify(member);
            res.send(member); 
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


