const express = require("express");
const auth = require('../../helpers/firebase').auth
const userService = require('./userService')
const usersRouter = express();
usersRouter.post('/create', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const phone = req.body.phone;
        const newUser = await userService.Create(email, password, firstname, lastname, phone)
        res.json(newUser)
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
usersRouter.post('/signIn', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
       
        const loggedinUser = await userService.Login(email, password)
        res.json(loggedinUser)
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
usersRouter.post('/sendPasswordResetEmail', async (req, res, next) => {
    try {
        const email = req.body.email;
        await auth.sendPasswordResetEmail(email)
        res.json({ 'message': 'Email Sent.' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
module.exports = usersRouter;