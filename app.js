const express = require("express");
app = express()
const validate = require('express-validation')
const users = require('./components/user/userRouter');
const lists = require('./components/list/listRouter');
const todo = require('./components/todo/todoRouter');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, UPDATE, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use((err, req, res, next) => {
    if (err instanceof validate.ValidationError || res.statusCode == 400) {
        res.status(err.status).json(err);
    } else {
        res.status(500).json({
            status: err.status,
            message: err.message
        });
    }
});
app.use('/users', users);
app.use('/lists', lists);
app.use('/todo', todo);

module.exports = app