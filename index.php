<?php session_start();?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cliente SUAP Javascript</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
</head>

<body>
    <section class="hero is-link is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Cliente SUAP Javascript</h1>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="is-anonymous is-hidden content">
                <h2>Você não está autenticado</h2>
                <a class="button is-success is-large" id="suap-login-button">Login com SUAP</a>
            </div>
            <div class="is-authenticated is-hidden content">
                <h2>Você está autenticado</h2>
                <p><button type="button" class="button is-danger" id="suap-logout-button">Encerrar Sessão</button></p>
                <div>
                    <p><strong>Access Token: </strong> <span id="token"></span></p>
                    <p><strong>Validade:</strong> <span id="validade_token"></span></p>
                    <p><strong>Escopos autorizados:</strong> <mark class="is-family-monospace" id="escopos_autorizados"></mark></p>
                    <div class="box has-background-grey-lighter">
                        <h3>Requisitar dados em nome do usuário</h3>
                        <p><strong>Escopos requisitados: </strong></p>
                        <p><input class="input" type="text" placeholder="Text input" id="escopos"></p>
                        <p><button id="suap-resource-button" type="button" class="button is-link">Enviar Requisição</button></p>
                        <p><strong>Resposta:</strong> <pre><code id="response" class="json"></code></pre></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="frontend/js/js.cookies.js"></script>
    <script src="frontend/js/settings.sample.js"></script>
    <script src="frontend/js/client.js"></script>
    <script>
        var suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE);
        suap.init();
        $(document).ready(function() {
            $("#suap-login-button").attr('href', suap.getLoginURL());
            if (suap.isAuthenticated()) {
                $('.is-authenticated').removeClass("is-hidden");
                $('#token').text(suap.getToken().getValue());
                $('#validade_token').text(suap.getToken().getExpirationTime());
                $("#escopos_autorizados").text(suap.getToken().getScope());
                $("#escopos").val(suap.getToken().getScope());
            } else {
                $('.is-anonymous').removeClass("is-hidden");
            }
        });
        $("#suap-logout-button").click(function() {
            suap.logout();
        });
        $("#suap-resource-button").click(function() {
            if (suap.isAuthenticated()) {
                var scope = $("#escopos").val();
                var callback = function(response) {
                    $("#response").text(JSON.stringify(response, null, 4));
                };
                suap.getResource(scope, callback);
            }
        });
    </script>
</body>

</html>