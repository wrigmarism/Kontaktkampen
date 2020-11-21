const functions = require("firebase-functions");
// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
exports.RegisterAnswer = functions.https.onCall(async (data, context) => {
  // Message text passed from the client.
  const companyID = data.companyID;
  const answer = data.answer;
  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid;
  const name = context.auth.token.name || null;

  var company = await admin
    .firestore()
    .collection("company")
    .doc(companyID)
    .get();

  var correctAnswer = company.get("correctAnswer");
  var score = 0;
  if (correctAnswer === answer) {
    score = 1;
  }

  var refUser = admin.firestore().collection("users").doc(uid);
  refUser.update({
    completedQuestions: admin.firestore.FieldValue.arrayUnion(companyID),
    score: admin.firestore.FieldValue.increment(score),
  });

  // if (!context.auth) {
  //     // Throwing an HttpsError so that the client gets the error details.
  //     throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
  //         'while authenticated.');
  //   }
  // Send back a message that we've succesfully written the message
  return { uid: correctAnswer };
});
