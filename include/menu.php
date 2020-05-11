<!-- <div class="container" id="menu"> -->
<nav class="navbar navbar-expand-lg navbar-dark bg-blue">
    <button class="btn btn-secondary" type="button" onclick="home()">Start</button>
    <button class="btn btn-secondary" type="button" onclick="companies()">Företag</button>
    <?php if(isset($_SESSION['status']) && $_SESSION['status'] == true) : ?>
        <button class="btn btn-secondary" type="button"><?php echo $_SESSION["uid"] ?></button>
        <button class="btn btn-secondary" type="button" onclick="logOut()">Logga ut</button>
    <?php else : ?>
                <button class="btn btn-secondary" type="button" onclick="logIn()">Logga in</button>
                <button class="btn btn-secondary" type="button" onclick="register()">Registera dig</button>
    <?php endif ?> 
    </nav>
<!-- </div> -->

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
    <img src="/assets/img/kdLogga.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Kontaktkampen
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link "href="#">Home </a>
      <a class="nav-item nav-link" href="#">Företag</a>
      <a class="nav-item nav-link" href="#">Logga in</a>
    </div>
  </div>
</nav>
