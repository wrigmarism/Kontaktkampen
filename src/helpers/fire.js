import firebase from "firebase";

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

const fire = firebase.initializeApp(firebaseConfig);
export default fire;