<div class="center">
            <section class="portarias w100">
                <div id="pages"></div>
            </section>
            <!--ainda vou ver como isso funfa-->
            <section class="agenda">
                <h3>Agenda do diretor</h3>
                <iframe title="agenda-google" src="https://calendar.google.com/calendar/embed?height=700&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FFortaleza&amp;src=Yml4b3BpcnVsZXRhNjJAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style="border-width:0" width="800" height="700"></iframe>
            </section>
            <!--aqui vai ser o iframe da agenda do diretor-->
            <div class="noticias-dataHora">
                <section class="noticias">
                    <h3>Clipping</h3>
                    <article id="noticia-mais-recente">
                        <div id="retangulo-noticia-recente" class="retangulo"></div>
                        <a href="<?php echo $link[2][0];?>" id="titulo1" class="titulo" alt="notícia mais recente"><?php echo $matches[2][0]; ?></a>
                    </article>
                    <article>
                        <div class="retangulo"></div>
                        <a href="<?php echo $link[2][1];?>" class="titulo"><?php echo $matches[2][1]; ?></a>
                    </article>
                    <article>
                        <div class="retangulo"></div>
                        <a href="<?php echo $link[2][2];?>" class="titulo"><?php echo $matches[2][2]; ?></a>
                    </article>
                    <article>
                        <div class="retangulo"></div>
                        <a href="<?php echo $link[2][3];?>" class="titulo"><?php echo $matches[2][3]; ?></a>
                    </article>
                </section>
                <div class="data-e-hora w50">
                    <div class="data-e-hora-internos">
                        <img src="images/Campus Joao Camara-Vertical.png" alt="logo vertical do ifrn-jc">
                        <h2 id="date"></h2>
                        <h3 id="clock"></h3>
                    </div>
                </div><!--data-e-hora-->
            </div><!--noticias-dataHora-->
        </div><!--center-->