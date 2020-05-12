// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB79OZRXPSHds112xsBihTbG-Iv0kjKPt8",
  authDomain: "kontaktkampen-b308a.firebaseapp.com",
  projectId: "kontaktkampen-b308a",
});

var db = firebase.firestore();

$(document).ready(function () {
  $("#home_button").click(function () {
    home();
  });
});

$(document).ready(function () {
  $("#companies_button").click(function () {
    companies();
  });
});

$(document).ready(function () {
  $("#logIn_button").click(function () {
    logIn();
  });
});

$(document).ready(function () {
  $("#logOut_button").click(function () {
    logOut();
  });
});

function home() {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "include/html/home.php", true);
  xhttp.send();
}

function companies() {
  document.getElementById("content").innerHTML =
    "<h1>Årets företag</h1>" +
    '<table id="company" cellspacing="0" cellpadding="1">' +
    "<tr>" +
    "<th> Logga </th>" +
    "<th> Företag </th>" +
    "<th> Kod </th>" +
    "</tr>" +
    "<tr>";

  db.collection("company")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#content").append(
          '<tr><th><img src="' +
            doc.data().img +
            '" width="50"></th>' +
            "<th>" +
            doc.data().name +
            "</th>" +
            "<th>" +
            doc.data().code +
            "</th></tr>"
        );
      });
    });
}

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

function logIn() {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "include/html/login.php", true);
  xhttp.send();
}

function logOut() {
  window.location = "include/models/logout.php";
}

function register() {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "include/html/registerform.php", true);
  xhttp.send();
}

function companyInfo(company) {
  db.collection("company").where("name", "==", company)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          $("#companyInfo").append(doc.data().info); //hämtar värdet från company(info)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }


  //Hämtar just nu endast frågan, men behöver även hämta alla svarsalternativ, och presentera dem på ett snyggt sätt
  function companyQuestion(company) {
    db.collection("company").where("name", "==", company)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            $("#companyInfo").append(doc.data().question); //hämtar värdet från company(question)
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }