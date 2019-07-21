const express = require("express");
const auth = require('../../helpers/firebase').auth
const userService = require('./userService')
const userDAL = require('./userDAL')
const validate = require('express-validation');
const userValidation = require("./user.validation")
const usersRouter = express();
usersRouter.post('/create', validate(userValidation.create), async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const phone = req.body.phone;
        const data = await userService.Create(email, password, firstname, lastname, phone, userDAL.Save)
        res.json(data)
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
usersRouter.post('/signIn', validate(userValidation.signIn), async (req, res, next) => {
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
usersRouter.post('/sendPasswordResetEmail', validate(userValidation.sendPasswordResetEmail), async (req, res, next) => {
    try {
        const email = req.body.email;
        await userService.Reset(email)
        res.json({ 'message': 'Email Sent.' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
module.exports = usersRouter;