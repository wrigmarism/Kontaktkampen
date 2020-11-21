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
      doc.get("img")
    );
    result.push(company);
  });
  return result;
}

export function SubmitAnswer(company, answer) {
  var addMessage = firebase.functions().httpsCallable("RegisterAnswer");
  addMessage({ companyID: company, answer: answer })
    .then(function (result) {
      // Read result of the Cloud Function.
      console.log(result.data.return);
    })
    .catch(function (error) {
      // Getting the Error details.
      var code = error.code;
      var message = error.message;
      var details = error.details;
      console.log(code + " " + message + " " + details);
    });
}

//Skapar ett dokument i db/collection/users, input: användarobjekt
export function createUser(u, uid, name) {
  db.collection("users").doc(uid).set({
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

export async function getCompletedQuestions(userId) {
  var data = [];
  console.log(userId);
  await db
    .collection("users")
    .where("userID", "==", userId)
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

export async function getFailedQuestions(userId) {
  var data = [];
  await db
    .collection("users")
    .where("userID", "==", userId)
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

export async function getUnlockedQuestions(userId) {
  var data = [];
  await db
    .collection("users")
    .where("userID", "==", userId)
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

export async function getUser(uid) {
  if (!uid) {
    return null;
  }
  try {
    const userDocument = await db.collection("users").doc(uid).get();
    console.log(userDocument.exists);
    if (userDocument.exists) {
      return {
        uid,
        ...userDocument.data(),
      };
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching user", error);
  }
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
