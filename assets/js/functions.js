// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
  authDomain: "kontaktkampen-b308a.firebaseapp.com",
  projectId: "kontaktkampen-b308a"
});

var db = firebase.firestore();

function home(){
    var xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "include/html/home.php", true);
    xhttp.send();
};

function companies(){

  db.collection("company").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

    // var xhttp;
    // if (window.XMLHttpRequest) {
    //   xhttp = new XMLHttpRequest();
    // } else {
    //   xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("content").innerHTML = this.responseText;
    //   }
    // };
    // xhttp.open("GET", "include/html/companies.php", true);
    // xhttp.send();
};

function logIn(){
    var xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "include/html/login.php", true);
    xhttp.send();

};

function logOut(){
  window.location = "include/models/logout.php";
};

function register(){
    var xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "include/html/registerform.php", true);
    xhttp.send();
};

