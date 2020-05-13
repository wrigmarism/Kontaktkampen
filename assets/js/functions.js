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
    //generateCompanies(30);
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

//Denna funktion laddar in alla företagskort med tillhörande data.
//Kan säkert optimeras för att bara ladda in relevant data när någon klickar på ett specefikt företag istället.
function companies() {
  $("#content").empty();
  $("#content").append(
    "<h4>Företagen:</h4>" + '<div class="accordion" id="accordion">'
  );
  db.collection("company")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var companyName = doc.data().name;
        companyNameNoSpaces = companyName.replace(/\s+/g, "");
        $("#accordion").append(
          '<div class="card">' +
            '<h5 class="card-header" data-toggle="collapse" href="#collapse' +
            companyNameNoSpaces +
            '" role="button" aria-expanded="false" aria-controls="collapseExample">' +
            companyName +
            "</h5>" +
            //kanske ta bort card-body här?
            '<div class="card-body collapse" id="collapse' +
            companyNameNoSpaces +
            '" data-parent="#accordion">' +
            '<ul class="nav nav-tabs card-header-tabs">' +
            '<li class="nav-item">' +
            '<a class="nav-link active cardShowText" id ="' +
            companyNameNoSpaces +
            '" >Info</a>' +
            "</li>" +
            '<li class="nav-item">' +
            '<a class="nav-link cardShowQuestion" id ="' +
            companyNameNoSpaces +
            '" >Fråga</a>' +
            "</li>" +
            "</ul>" +
            '<div class="card-body" id="text_' +
            companyNameNoSpaces +
            '" <img src="' +
            '"> <img src="' +
            doc.data().img +
            '" class="card-img-top">' +
            '<h5 class="card-title">' +
            doc.data().title +
            "</h5>" +
            '<p class="card-text">' +
            doc.data().infoText +
            "</p>" +
            "</div>" +
            '<div class="card-body questionDiv" id="question_' +
            companyNameNoSpaces +
            '">' +
            "<h5>" +
            doc.data().question +
            "</h5>" +
            '<div class="form-check">' +
            '<input class="form-check-input" type="radio" name="' +
            companyNameNoSpaces +
            '" value="1">' +
            '<label class="form-check-label" for="exampleRadios1">' +
            doc.data().answer1 +
            "</label>" +
            "</div>" +
            '<div class="form-check">' +
            '<input class="form-check-input" type="radio" name="' +
            companyNameNoSpaces +
            '" value="2">' + +
            '<label class="form-check-label" for="exampleRadios2">' +
            doc.data().answer2 +
            "</label>" +
            "</div>" +
            '<div class="form-check">' +
            '<input class="form-check-input" type="radio" name="' +
            companyNameNoSpaces +
            '" value="3">' +
            '<label class="form-check-label" for="exampleRadios3">' +
            doc.data().answer3 +
            "</label>" +
            "</div>" +
            '<button type="button" class="btn btn-primary selectAnswer">Välj</button>' +
            "</div>" +
            "</div>" +
            "</div>"
        );
      });
    });
}

$(document).ready(function () {
  $("body").on("click", ".selectAnswer", function () {
    var radioValue = $('input[name=radioName]:checked', '#myForm').val()
    alert(radioValue);
  });
});

//Denna funktion aktiveras när någon trycker på fråga fliken i ett företagskort
//Den tar in namnet på företaget och skickar det till funktionen under som startar
//animationen. Den ändrar även vilken flik som har "active" som css property.
$("body").on("click", "a.cardShowQuestion", function () {
  var company = $(this).attr("id");
  if ($(".cardShowText").hasClass("active")) {
    $(this).addClass("active");
    $(".cardShowText").removeClass("active");
  }
  showQuestion(company);
});

function showQuestion(company) {
  var idNameText = "text_" + company;
  var idNameQuestion = "question_" + company;
  $("#" + idNameText).hide(450);
  $("#" + idNameQuestion).show(450);
}

//Denna funktion aktiveras när någon trycker på info fliken i ett företagskort
//Den tar in namnet på företaget ochskickar det till funktionen under som startar
//animationen. Den ändrar även vilken flik som har "active" som css property.
$("body").on("click", "a.cardShowText", function () {
  var company = $(this).attr("id");
  if ($(".cardShowQuestion").hasClass("active")) {
    $(this).addClass("active");
    $(".cardShowQuestion").removeClass("active");
  }
  showText(company);
});

function showText(company) {
  var idNameText = "text_" + company;
  var idNameQuestion = "question_" + company;
  $("#" + idNameQuestion).hide(450);
  $("#" + idNameText).show(450);
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
  db.collection("company")
    .where("name", "==", company)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#companyInfo").append(doc.data().info); //hämtar värdet från company(info)
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

//Hämtar just nu endast frågan, men behöver även hämta alla svarsalternativ, och presentera dem på ett snyggt sätt
function companyQuestion(company) {
  db.collection("company")
    .where("name", "==", company)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        $("#companyInfo").append(doc.data().question); //hämtar värdet från company(question)
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

//id(name, question, title, infoText, img, answer1, answer2, answer3, correctAnswer)

function generateCompanies(x) {
  for (let i = 1; i <= x; i++) {
    db.collection("company").add({
      name: "Företag " + i,
      title: "Here be " + i + " dragons",
      infoText: "We are " + i,
      img: "URL " + i,
      question: "How many?",
      answer1: "1",
      answer2: "2",
      answer3: "3",
      correctAnswer: Math.floor(Math.random() * 3),
    });
  }
}
