var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todo-880b7.firebaseio.com"
});
module.exports = { adminauth: admin.auth() }