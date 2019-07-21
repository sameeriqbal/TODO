const express = require("express");
const db = require('../../helpers/firebase').db
const verifyToken = require("../../middlewares/authenticate").verifyToken
const todoRouter = express();
//it will create todo
todoRouter.post('/create', verifyToken, async (req, res, next) => {
    try {
        const todo = req.body;
        await db.collection("todo").add(todo)
        res.json({ 'status': 'success' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
//it will get all todos of logged in user only
todoRouter.get('', verifyToken, async (req, res, next) => {
    try {
        var result = []
        let querySnapshot = await db.collection("todo")
            .where("UserId", "==", req.body.UserId)
            .get();
        querySnapshot.forEach(function (doc) {
            result.push(doc.data())
        });
        res.json({ 'todo': result })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
//it will get todos of specific list
todoRouter.get('/:listid', verifyToken, async (req, res, next) => {
    try {
        var result = []
        let querySnapshot = await db.collection("todo")
            .where("listid", "==", req.params.listid)
            .get();
        querySnapshot.forEach(function (doc) {
            result.push(doc.data())
        });
        res.json({ 'todo': result })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
//it will update todo by ID
todoRouter.put('/:id', verifyToken, async (req, res, next) => {
    try {
        await db.collection("todo").doc(req.params.id).update(req.body);
        res.json({ 'status': 'success' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})
//it will delete todo by id
todoRouter.delete('/:id', verifyToken, async (req, res, next) => {
    try {
        await db.collection("todo").doc(req.params.id).delete();
        res.json({ 'status': 'success' })
    }
    catch (error) {
        res.json({ errorCode: error.code, errorMessage: error.message })
    }
})


module.exports = todoRouter;