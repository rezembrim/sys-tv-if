<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processamento</title>
</head>

<script>
    var token = window.location.hash;
    token = getToken(token);

    // var expire = window.location.hash;
    // expire = getExpire(expire);
    document.cookie = 'token=' + token + ';';
    window.location.replace("http://localhost/ws-projeto-ti/frontend");

    /*
     *  retorna uma String
     */
    function getToken(variable) {
        variable = variable.replace("#access_token=", "");
        /* 
         *  a variável final faz um -1 pq a chave de 
         *  acesso só vai até uma posição antes do '&'
         */
        let final = variable.indexOf("&") - 1;
        variable = variable.substring(0, final);
        return variable;
    }

    /*
     *  retorna uma String
     */
    function getExpire(variable) {
        /*
         *  retira a chave de acesso da string
         */
        let accessToken = variable.substring(0, variable.indexOf("&"));
        variable = variable.replace(accessToken, "");

        let str = variable.substring(variable.indexOf("&"), variable.length);
        variable = variable.replace(str, "");
        return variable;
    }
</script>

</html>