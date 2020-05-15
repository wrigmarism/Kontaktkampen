<?php 
    include "../header.php";
    include "functions.php";

    $conn = new Database;

    $sql = "SELECT * FROM company";
    $result = $conn->conn->query($sql);
    $conn->conn->close();

?>