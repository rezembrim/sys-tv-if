<?php

    $content = file_get_contents('https://portal.ifrn.edu.br/campus/joaocamara');

    preg_match_all('/<div class="each_news">(.*?)<span class="news_title">(.*?)<\/span>(.*?)<\/div>/s', $content, $matches);

    for ($i=0; $i < 4; $i++) { 
        $matches[2][$i] = formataTitulo( $matches[2][$i]);
    }
   
    function formataTitulo($var)
    {
        if (strlen($var) > 100) {
            $var = substr($var, 0, 100).'...';
        }
        return $var;
    }

    preg_match_all('/<div class="each_news">(.*?)<a href="(.*?)">(.*?)<\/a>(.*?)<\/div>/s', $content, $link);

?>