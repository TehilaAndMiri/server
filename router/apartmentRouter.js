const express=require('express');
const router=express.Router();
const controller = require('../controllers/apartmentController');


router.post('/',controller.postApartment);

module.exports=router;