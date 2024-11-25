const express= require('express');
const { loginController, registerController } = require('../controllers/userControllers.js');

const router = express.Router();

router.route('/login').post(loginController)
router.route('/register').post(registerController)

module.exports= router