<?php
    include('../backend/WebScraping.php');
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Schedule System</title>
    <script src="scripts/realtime.js"></script>
    <link rel="stylesheet" href="style/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    
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

    <script>
        (async() => {
            //abrir arquivos de dados (json)
            const response = await fetch('http://localhost/ws-projeto-ti/suap.json');
            const data = await response.json();

            //formatar os dados para enviar para o html
            const htmlList = data
            .map(iconView => `<li><a href="${iconView.href}">${iconView.title}</a></li>`)
            .join('');

            //colocar no html
            document.querySelector('.portarias').innerHTML = htmlList;
        })();
    </script>
</body>

</html>
