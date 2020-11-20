import { db } from "../services/firebase";
import firebase from "firebase/app";
import Company from "./companyClass.js";

export async function getData(collection) {
  const data = await db.collection(collection).get();
  let result = [];
  //Laddar in resultatet i ett eget objekt istället för en vanlig array då jag ville ha med firebase ID för varje företag
  data.forEach(function (doc) {
    var company = new Company(
      doc.id,
      doc.get("name"),
      doc.get("title"),

      doc.get("text"),

      doc.get("question"),
      doc.get("answer1"),
      doc.get("answer2"),
      doc.get("answer3"),
      doc.get("correctAnswer"),
      doc.get("img")
    );
    result.push(company);
  });
  return result;
}

//Skapar ett dokument i db/collection/users, input: användarobjekt
export function createUser(u, name) {
  db.collection("users").doc().set({
    completedQuestions: [],
    failedQuestions: [],
    score: 0,
    unlockedQuestions: [],
    userID: u.email,
    name: name,
  });
}

export async function fetchData(collection) {
  const data = await db
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return tempDoc;
    });
  return data;
}

export async function getStaticText(page) {
  const data = await fetchData("staticText");
  var result;
  data.forEach((text) => {
    if (text.id === page) {
      result = text;
    }
  });
  return result;
}

//var firebase = require("firebase");
//var firebaseui = require("firebaseui");

export async function getCompletedQuestions() {
  var data = [];
  await db
    .collection("users")
    .where("userID", "==", "123")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.get("completedQuestions"));
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  return data;
}

export async function getFailedQuestions() {
  var data = [];
  await db
    .collection("users")
    .where("userID", "==", "123")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.get("failedQuestions"));
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  return data;
}

export async function getUnlockedQuestions() {
  var data = [];
  await db
    .collection("users")
    .where("userID", "==", "123")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.get("unlockedQuestions"));
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  return data;
}

export async function checkQRCode(code) {
  var docRef = db.collection("company").doc(code);

  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var ref = db.collection("users").doc("50luj5fMi93PBkK4s26N");
        console.log("Hejsan det är jesus");
        ref.update({
          unlockedQuestions: firebase.firestore.FieldValue.arrayUnion(code),
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("QR code did not match with any question ID");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

export function updateUser(question) {
  var ref = db.collection("users").doc("50luj5fMi93PBkK4s26N");

  ref.update({
    completedQuestions: firebase.firestore.FieldValue.arrayUnion(question),
    score: firebase.firestore.FieldValue.increment(1),
  });
}

export function failedQuestions(question) {
  var ref = db.collection("users").doc("50luj5fMi93PBkK4s26N");

  ref.update({
    failedQuestions: firebase.firestore.FieldValue.arrayUnion(question),
  });
}

export function clearUser() {
  var ref = db.collection("users").doc("50luj5fMi93PBkK4s26N");

  ref.update({
    completedQuestions: [],
    failedQuestions: [],
    score: 0,
  });
}
