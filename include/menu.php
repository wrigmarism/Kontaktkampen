<div id="menu">
    <button type="button" onclick="home()">Start</button>
    <button type="button" onclick="companies()">Företag</button>
    <?php if(isset($_SESSION['status']) && $_SESSION['status'] == true) : ?>
        <button type="button"><?php echo $_SESSION["uid"] ?></button>
        <button type="button" onclick="logOut()">Logga ut</button>
    <?php else : ?>
                <button type="button" onclick="logIn()">Logga in</button>
                <button type="button" onclick="register()">Registera dig</button>
    <?php endif ?> 
</div>