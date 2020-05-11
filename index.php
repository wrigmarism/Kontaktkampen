<!DOCTYPE html>
<html lang="sv-SE">
    <head>
        <title>Kontaktkampen</title>
        <meta charset="utf-8">

    </head>

    <?php
        include "include/header.php";
    ?>

    <body>
        <?php include "include/menu.php" ?>
        <div id="content">
            <?php include "include/html/home.php" ?>
        </div>

        <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase.js"></script>

        <script>
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
        authDomain: "kontaktkampen-b308a.firebaseapp.com",
        databaseURL: "https://kontaktkampen-b308a.firebaseio.com",
        projectId: "kontaktkampen-b308a",
        storageBucket: "kontaktkampen-b308a.appspot.com",
        messagingSenderId: "927975566314",
        appId: "1:927975566314:web:6ae89ddc756572c8496093",
        measurementId: "G-D3S89K248G"

    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  </script>

<script>// Add a new document in collection "cities"
db.collection("företag").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});</script>
    <script src="assets/js/functions.js"></script>
    </body>
</html>