const jwt = require("jsonwebtoken");
const adminauth = require("../helpers/firebaseAdmin").adminauth
const db = require('../helpers/firebase').db

exports.verifyToken = function verifyToken(req, res, next) {
    //Get the auth header value
    const bearerHeader = req.headers['authorization'];
    //Check if not null
    if (typeof bearerHeader !== 'undefined') {
        //Split at the space
        const bearer = bearerHeader.split(' ');
        //Get token from header
        const bearerToken = bearer[1];
        //Set the token
        req.token = bearerToken;
        // idToken comes from the client app
        adminauth.verifyIdToken(req.token)
            .then(function (decodedToken) {
                //Set Uid for incoming request
                req.body.UserId = decodedToken.user_id;
                req.body.CreatedBy = decodedToken.email;
                req.body.CreatedAt = new Date();
                next();
            }).catch(function (error) {
                // Handle error
                res.statusCode = 498;
                res.setHeader('Content-Type', 'application/json');
                res.json(error);
            });
    }
    else {
        //forbidden
        res.sendStatus(403);
    }
};
