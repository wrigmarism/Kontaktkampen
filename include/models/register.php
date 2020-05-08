<?php

    include "functions.php";
    include "../header.php";

    $conn = new Database;

    $name = mysqli_real_escape_string($conn->conn, $_POST['name']);
    $mail = mysqli_real_escape_string($conn->conn, $_POST['email']);
    $pwd = mysqli_real_escape_string($conn->conn, md5($_POST['pwd']));

    $salt = getSalt();

    $checkEmail = "SELECT mail FROM user WHERE mail = '" . $mail . "'";
    $result = $conn->conn->query($checkEmail);
    $row = mysqli_fetch_array($result);
    if(isset($row)){
        echo("<script>alert('Den mejladressen används redan.');</script>");
        header("Refresh: 0; URL=../../index.php");
    }
    else{
        if(checkForm($mail, $pwd)){
            $salt = getSalt();
            $saltedPwd = $pwd . md5($salt);

            $query = "INSERT INTO user(name, mail, pwd, salt) VALUES ('$name', '$mail', '$saltedPwd', '" . $salt . "')";
            $conn->conn->query($query);

            echo("<script>alert('Registrerad!')</script>");
            $_SESSION["name"] = $name;
            $_SESSION["status"] = true;
            header("Refresh: 0; URL=../../index.php");
        }
        else{
            echo("<script>alert('Mejladressen eller lösenordet är inte giltigt')</script>");
            header("Refresh: 0; URL=../../index.php");
        }
    }
?>