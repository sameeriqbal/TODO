const express = require("express");
const db = require('../../helpers/firebase').db
const verifyToken = require("../../middlewares/authenticate").verifyToken
const listsRouter = express();
listsRouter.post('/create', verifyToken, async (req, res, next) => {
    try {
        const list = req.body;
        await db.collection("lists").add(list)
        res.json({ 'status': 'success' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})


module.exports = listsRouter;