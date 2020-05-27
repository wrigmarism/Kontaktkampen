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

      doc.get("infoText"),

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

export async function getUser() {
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

export function updateUser(question) {
  var ref = db.collection("users").doc("50luj5fMi93PBkK4s26N");

  // Atomically add a new region to the "regions" array field.
  ref.update({
    completedQuestions: firebase.firestore.FieldValue.arrayUnion(question),
  });
}
