<?php
    include "../header.php";
    include "functions.php";

    $conn = new Database;

    $mail = mysqli_real_escape_string($conn->conn, $_POST['usr']);
    $pwd = mysqli_real_escape_string($conn->conn, md5($_POST['pwd']));


    $sql = "SELECT mail, pwd, salt, name FROM user WHERE mail = '$mail'";
    $result = $conn->conn->query($sql);
    $row = mysqli_fetch_array($result);

    if($row[0] == $mail && $row[1] == ($pwd . md5($row[2]))){
        $_SESSION["uid"] = $row[3];
        $_SESSION["status"] = true;
        header("Refresh: 0; URL=../../index.php");
    }
    else{
        echo("<script>alert('Ogiltig mejladress eller lösenord.');</script>");
        header("Refresh: 0; URL=../../index.php");
    }
    $conn->conn->close();
?>