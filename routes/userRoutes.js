const express =require('express')
const { loginController, registerController, authController, } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/login',loginController)
router.post('/register',registerController)

//auth||post
router.post('/getUserData',authMiddleware,authController)

module.exports =router;