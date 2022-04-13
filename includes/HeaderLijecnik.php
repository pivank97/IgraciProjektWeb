<?php
session_start();
?>

<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/lijecnik.css" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
<body>
<div class="flexbox"> 
    <div class="logo"><img src="C:/Users/student/desktop/web/style/logo.png" alt="Online liječnički karton logo" class="logo">
    </div>
    <div><h1>Online liječnički karton</h1></div>
    <div><h2>Dobrodošli</h2></div>
</div>
    <nav>
        <div class="wrapper">    
                <a href="HomeLijecnik.php">Početna</a>
                <a href="RegisterLijecnik.php">Registriraj se</a>
                <a href="LoginLijecnik.php">Prijavi se</a>
                <a href="../includes/Logout.php">Odjava</a>
                </div>
        </div>
    </nav>
</body>