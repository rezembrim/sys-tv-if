<?php

    $content = file_get_contents('https://portal.ifrn.edu.br/campus/joaocamara');

    preg_match_all('/<div class="each_news">(.*?)<span class="news_title">(.*?)<\/span>(.*?)<\/div>/s', $content, $matches);
    
?>