<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../style/register.css">
    </head>
    <body>
    <form action="" method="POST">
        <label for="username">Puno ime doktora:</label><br>
        <input type="text" id="fullname" name="fullname" required><br>
        <label for="username">Korisničko ime doktora:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Zaporka:</label><br>
        <input type="password" id="password" name="password" required><br>
        <?php echo $error; ?>
        <input type="submit" id="submit" name="submit" value="Dodaj"><br>
    </form>
    </body>
    <footer class="footer">Online liječnički karton</footer>
</html>