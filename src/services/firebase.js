import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
  authDomain: "kontaktkampen-b308a.firebaseapp.com",
  databaseURL: "https://kontaktkampen-b308a.firebaseio.com",
  projectId: "kontaktkampen-b308a",
  storageBucket: "kontaktkampen-b308a.appspot.com",
  messagingSenderId: "927975566314",
  appId: "1:927975566314:web:6ae89ddc756572c8496093",
  measurementId: "G-D3S89K248G",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireB = firebase;
export const db = firebase.firestore();
export const functions = firebase.app().functions("europe-west1");
