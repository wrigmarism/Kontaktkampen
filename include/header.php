<?php 
    session_start();

    class Database {
        function __construct() {
            $server = "localhost";
            $db = "kontaktkampen";
            $usr = "phpmyadmin";
            $pwd = "e>x3E5a+N&";
    
            $this->conn = new mysqli($server, $usr, $pwd, $db);
    
            if ($this->conn->connect_error) 
            {
                die("Error: " . $this->conn->connect_error);
            }
        }
        public function query ($sql){
            return $this->conn->query($sql) or die("Query error: " . $this->conn->error);
        }
    }
?>