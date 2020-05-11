
<div class="container">
<h1>Registrera användare</h1>

    <form id="registerform" action="include/models/register.php" method="post">
  <div class="form-group">
    <label for name="name">Namn:</label>
    <input type="email" class="form-control" type="text" id="name" name="name">
  </div>
  <div class="form-group">
    <label for name="email">E-mail:</label>
    <input type="email" class="form-control" type="text" id="email" name="email" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for name="pwd">Lösenord:</label>
    <input type="password" class="form-control" type="password" id="pwd" name="pwd">
  </div>
  <button type="submit" class="btn btn-primary">Registrera</button>
</form>


</div>