const express = require('express');
const router = express.Router();

/*
|field import Controller
*/
const usersController = require('../controller/usersController');
const authController  = require('../controller/authControlller');

//default routers
router.get('/', (req, res) =>{
    res.json({
        message: 'Selamat datang di APi ...'
    })
});

/*
|field routes
*/
//auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);
//routes users
router.get('/users', usersController.getAllUsers);
router.get('/users2', usersController.getAllUsers2);
router.post('/users', usersController.createNewUser);
router.put('/users/:idUser', usersController.updateUser);
router.delete('/delete/:idUser', usersController.deleteUser);



module.exports = router;