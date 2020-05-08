<?php
    function checkForm($uid, $pwd){
        if(checkIfEmpty($uid) and checkIfEmpty($pwd) and checkEmail($uid)){
            return true;
        }
        else{
            return false;
        }
    }

    function checkIfEmpty($uid){
        if($uid == "" or trim($uid) == ""){
            return false;
        }
        else{
            return true;
        }
    }

    function checkEmail($email){
        $pos1 = strpos($email, '@');
        $pos2 = strpos($email, '.', $pos1);
        if($pos1 >= $pos2){
            return true;
        }
        else{
            return false;
        }
    }

    function getSalt(){
        $charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#¤%&/()=?";
        $randstring = "";
        for($i = 0; $i < 10; $i++){
            $randstring .= $charset[mt_rand(0, 72)];
        }
        return $randstring;
    }
?>