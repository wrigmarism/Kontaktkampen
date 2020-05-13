<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
    <img src="assets/img/kdLogga.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Kontaktkampen
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" id="home_button" data-toggle="collapse" data-target=".navbar-collapse">Home </a>
      <a class="nav-item nav-link" id="companies_button" data-toggle="collapse" data-target=".navbar-collapse">Företag</a> 
      
      <?php if(isset($_SESSION['status']) && $_SESSION['status'] == true) : ?>
        <a class="nav-item nav-link" id="logOut_button" data-toggle="collapse" data-target=".navbar-collapse">Logga ut</a>
    <?php else : ?>
      <a class="nav-item nav-link" id="logIn_button" data-toggle="collapse" data-target=".navbar-collapse">Logga in</a>
    <?php endif ?> 
      <a class="nav-item nav-link" id="generate_button">Generera data</a>

    </div>
  </div>
</nav>
