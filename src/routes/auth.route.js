const express= require('express');
const authController= require('../controllers/auth.controller')
const router = express.Router();

router.post("/register",authController.register)
router.post("/register",authController.login)

module.exports= router;