<?php

    $url = 'https://portal.ifrn.edu.br/campus/joaocamara';
    $content = file_get_contents($url);

    // pega título
    preg_match_all('/<div class="each_news">(.*?)<span class="news_title">(.*?)<\/span>(.*?)<\/div>/s', $content, $matches);

    for ($i=0, $numberNews = 4; $i < $numberNews; $i++) { 
        $matches[2][$i] = formatTitle($matches[2][$i]);
    }
    
    // pega o link
    preg_match_all('/<div class="each_news">(.*?)<a href="(.*?)">(.*?)<\/a>(.*?)<\/div>/s', $content, $link);

    function formatTitle($title) {
        $maxChar = 200;
        return strlen($title) > $maxChar?$title = substr($title, 0, $maxChar).'...':$title;
    }

?>