<!DOCTYPE html>
<html lang="sv-SE">
    <head>
        <title>Kontaktkampen</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/styles.css">
        <link rel="shortcut icon" type="image/jpg" href="assets/img/kdLogga.png"/>
    </head>

    <?php
        include "include/header.php";
    ?>

    <body>
        <?php include "include/menu.php" ?>
        <div id="content">
            <?php include "include/html/home.php" ?>
        </div>


        <div class="card">
  <h5 class="card-header" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Capgemini
</h5>
  <div class="card-body collapse" id="collapseExample">
  <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Fråga</a>
      </li>
    </ul>
  <img src="assets/img/Logga1.jpg" class="card-img-top">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>

<div class="card">
  <h5 class="card-header" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
  Microsoft
</h5>
  <div class="card-body collapse" id="collapseExample2">
  <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Fråga</a>
      </li>
    </ul>
  <img src="assets/img/Logga2.png" class="card-img-top">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>

<div class="card">
  <h5 class="card-header" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
  Cytiva
</h5>
  <div class="card-body collapse" id="collapseExample3">
  <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Fråga</a>
      </li>
    </ul>
  <img src="assets/img/Logga3.jpg" class="card-img-top">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>



        <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="assets/js/functions.js"></script>
    </body>
</html>