const express =require('express');
const router =express.Router();
const userController=require('../controllers/userController');

router.get('/profile',userController.profile);
router.get('/sign-in',userController.signin);
router.get('/sign-up',userController.signup);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession);
router.post('/sign-out',userController.signOut);
module.exports=router;