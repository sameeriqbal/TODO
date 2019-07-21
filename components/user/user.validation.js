const Joi = require('joi');
module.exports = {
    //POST /users/create
    create: {
        body: {
            email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
            password: Joi.string().min(6).required(),
            firstname: Joi.string().max(100).required(),
            lastname: Joi.string().max(100).required(),
            phone: Joi.string().required()
        }
    },
    //POST /users/signIn
    signIn: {
        body: {
            email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
            password: Joi.string().min(6).required(),
        }
    },
    //POST /users/sendPasswordResetEmail
    sendPasswordResetEmail: {
        body: {
            email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required()
        }
    }


}