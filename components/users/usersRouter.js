const express = require("express");
const usersRouter = express();
usersRouter.post('/create', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const newUser = await auth.createUserWithEmailAndPassword(email, password)
        res.json({ 'user': newUser })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
usersRouter.post('/signIn', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const newUser = await auth.signInWithEmailAndPassword(email, password)
        res.json({ 'user': newUser })
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