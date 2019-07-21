// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJH1EzvI_ATMi0yHjAaj_wZvBrpY95XHE",
    authDomain: "todo-880b7.firebaseapp.com",
    databaseURL: "https://todo-880b7.firebaseio.com",
    projectId: "todo-880b7",
    storageBucket: "",
    messagingSenderId: "165377429893",
    appId: "1:165377429893:web:7bc6ede485abf10e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { auth: firebase.auth(), db: firebase.firestore() };