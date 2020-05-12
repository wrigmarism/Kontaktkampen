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

$(document).ready(function () {
  $("#generate_button").click(function () {
    generateCompanies(30);
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
  $("#content").empty();
  $("#content").append('<h4>Företagen:</h4>' +
  '<div class="accordion" id="accordion">');
  db.collection("company")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#accordion").append(
          '<div class="card">' +
          '<h5 class="card-header" data-toggle="collapse" href="#collapse' +
           doc.data().name +
          '" role="button" aria-expanded="false" aria-controls="collapseExample">' +
            doc.data().name +
            '</h5>' +
            '<div class="card-body collapse" id="collapse' + 
            doc.data().name +
            '" data-parent="#accordion">' +
            '<ul class="nav nav-tabs card-header-tabs">' +
            '<li class="nav-item">' +
              '<a class="nav-link active">Info</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a class="nav-link cardShowQuestion" id ="' +
              doc.data().name +
              '" >Fråga</a>' +
            '</li>' +
          '</ul>' +
          '<div id="container_' +
          doc.data().name +
          '" <img src="' +
          '"> <img src="' +
            doc.data().img +
            '" class="card-img-top">' +
            '<h5 class="card-title">' +
            doc.data().title +
            '</h5>' +
            '<p class="card-text">' +
            doc.data().infoText + 
            '</p>' +
            '</div>' +
          '</div>'
      );
      });
    });
}

$('body').on('click', 'a.cardShowQuestion', function() {
  alert($(this).attr('id'));
  var company = $(this).attr('id');
  showQuestion(company);
});

function showQuestion(company){

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

//id(name, question, title, infoText, img, answer1, answer2, answer3, correctAnswer)


function generateCompanies(x){

  for (let i = 1; i <= x; i++) {
      db.collection('company').add({
        name : "Företag " + i,
        title : "Here be " + i + " dragons",
        infoText : "We are " + i,
        img : "URL " + i,
        question : "How many?",
        answer1 : "1",
        answer2 : "2",
        answer3 : "3",
        correctAnswer : Math.floor(Math.random() * 3)
      });
  }
}