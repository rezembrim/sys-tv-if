/**
 * Esse script serve para
 * transitar de uma div para
 * outra.
 * 
 * @OBS : bodyContent serve como
 *        gambiarra pra o negócio
 *        funcionar.
 * 
 * @Autor Lucas-dev-back
 */

const delay = 10;
var time = delay * 1000,
    currentBodySuapIndex = 0,
    bodyContent = document.querySelectorAll('.bodyContentSuap'),
    max = document
    .querySelectorAll('.bodyContentSuap')
    .length;

function nextBodyContent() {
    bodyContent[currentBodySuapIndex]
        .style.display = 'none';
    currentBodySuapIndex++;

    if (currentBodySuapIndex >= max)
        currentBodySuapIndex = 0;

    bodyContent[currentBodySuapIndex]
        .style.display = 'block';
}

function start() {
    setInterval(() => {
        nextBodyContent();
    }, time);
}

function initDisplayNoneInBodyContents() {
    for (let index = 1; index < max; index++) {
        bodyContent[index].style.display = 'none'
    }
}

initDisplayNoneInBodyContents();
bodyContent[0].style.display = 'block'
window.addEventListener('load', start);