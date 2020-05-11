<?php 
    include "../models/listCompanies.php";
?>

    <h1>Årets företag</h1>
    <table id="posts" cellspacing="0" cellpadding="1" width="300">
    <tr> 
        <th> Logga </th>
        <th> Företag </th>
        <th> Kod </th>
    </tr>
    <script>
    firebase.initializeApp({
        apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
        authDomain: "kontaktkampen-b308a.firebaseapp.com",
        projectId: "kontaktkampen-b308a"
    });
    
    var db = firebase.firestore();

    db.collection("company").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        document.write('<tr><th>' + doc.data().name + '</th>');
        document.write('<th>' + doc.data().img + '</th>');
        document.write('<th>' + doc.data().code + '</th></tr>');
    });
</script>
</table>