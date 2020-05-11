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

        <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.14.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.14.3/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
    </body>
</html>