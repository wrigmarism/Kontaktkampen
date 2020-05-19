import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
    authDomain: "kontaktkampen-b308a.firebaseapp.com",
    databaseURL: "https://kontaktkampen-b308a.firebaseio.com",
    projectId: "kontaktkampen-b308a",
    storageBucket: "kontaktkampen-b308a.appspot.com",
    messagingSenderId: "927975566314",
    appId: "1:927975566314:web:6ae89ddc756572c8496093",
    measurementId: "G-D3S89K248G"
};

firebase.initializeApp(firebaseConfig);

//auth kommer användas i production när databasen kommer låsas.
// export const auth = firebase.auth;
// export const db = firebase.database();

//auth kommer användas i production när databasen kommer låsas.
export const auth = firebase.auth;
/*export const db = firebase.database();*/
const firestore = require("firebase");
export let db = firestore.firestore();
