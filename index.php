<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processamento</title>
</head>

<body>
    <h2 style="text-align: center; top: 10px">Por favor, aguarde o processamento...</h2>
</body>

<script>
    initSuapJson();
    window.location.replace("../ws-projeto-ti/frontend");

    async function initSuapJson () {
        await fetch('http://localhost:3122/');
    }
</script>

</html>