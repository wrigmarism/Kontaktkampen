import { db } from "../services/firebase";
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


//Skapar ett dokument i db/collection/users, input: användarobjekt
export function createUser(u) {
  db.collection("users").doc().set({
    completedQuestions: [],
    failedQuestions: [],
    score: 0,
    unlockedQuestions: [],
    userID: u.email,
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

export async function getStaticText(page){
  const data = await fetchData("staticText");
  var result;
  data.forEach((text) => {
    if(text.id === page){
      result = text;
    }
    });
    return result;
  }

  


var firebase = require("firebase");
var firebaseui = require("firebaseui");
