<?php
    include('../backend/WebScraping.php');
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta http-equiv="refresh" content="30">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Schedule System</title>
    <script src="./js/conectorWithSuapJson.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/style.css">
    <style>
        #pages{
            height: 100%;
            display: flex;
            overflow: hidden;
        }

        .page{
            margin: 1%;
            width: 100%;
            height: 100%;
            border: none;
            display: none;
        }

        .selected {
            display: block;
        }
    </style>
</head>

<body>

    <?php
        $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    ?>

    <header>
        <div class="logo">
            <img src="images/Campus Joao Camara-Horizontal.png" alt="logo do ifrn campus joão câmara">
        </div>
    </header>

    <main>
        <?php
            if(file_exists('../frontend/pages/'.$url.'.php')){
                include('pages/'.$url.'.php');
            } else {
                include('../frontend/pages/error404.php');
            }
        ?>
    </main>

    <footer>
        <p>Página desenvolvida pela CTI/JC</p>
    </footer>
</body>

</html>
