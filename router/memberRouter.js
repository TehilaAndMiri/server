const express=require('express');
const router=express.Router();
const controller = require('../controllers/memberController');


router.put('/',controller.updateMember);
router.post('/',controller.postMember);

module.exports=router;