const express=require('express');
const router=express.Router();
const controller = require('../controllers/userController');


router.post('/',controller.postUser);
router.get('/',controller.getUserByEmailPassword);
router.get('/',controller.GetById);

module.exports=router;
