<?php
    session_start();
?>

<h1>Välkommen till kontaktkampen!</h1>

<?php
    if(isset($_SESSION["status"]) && $_SESSION["status"] == true){
        echo "Du är inloggad som " . $_SESSION["uid"];
    }
    else{
        echo "Logga in eller registrera dig för att vara med!";
    }

?>