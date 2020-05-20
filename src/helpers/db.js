import { db } from "../services/firebase";
import Company from './companyClass.js'

export async function getData(collection) {
  const data = await db.collection(collection).get();
  let result = [];
  data.forEach(function (doc) {
    var company = new Company(doc.id, doc.get("name"), doc.get("title"), doc.get("text"), doc.get("question"), 
    doc.get("answer1"), doc.get("answer2"), doc.get("answer3"), doc.get("correctAnswer"));
    result.push(company);
  });
  return result;
}
