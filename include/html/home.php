<?php
    session_start();

    if(isset($_SESSION["status"]) && $_SESSION["status"] == true){
        echo "Hej, " . $_SESSION["uid"];
    }
    else{
        echo "home";
    }

?>