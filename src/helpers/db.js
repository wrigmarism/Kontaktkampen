import { db } from '../services/firebase';

export async function getData(collection){
    const data = await db.collection(collection).get()
    let result = [];
    data.forEach(function (doc) {
      result.push(doc.data());
      });
      return result;
}