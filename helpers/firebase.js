// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig=require('../config/firebaseConfig')
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { auth: firebase.auth(), db: firebase.firestore() };