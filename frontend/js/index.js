var delay = 10;
var time = delay * 1000,
    currentBodySuapIndex = 0;
var bodyContents = document
    .querySelectorAll('.portarias div'),
    max = bodyContents.length;

(function teste() {
    console.log(bodyContents);
})()

function nextBodyContent() {
    bodyContents[currentBodySuapIndex].style.display = 'none';
    currentBodySuapIndex++;

    if (currentBodySuapIndex >= max)
        currentBodySuapIndex = 0;

    bodyContents[currentBodySuapIndex].style.display = 'block';
}

function start() {
    setInterval(() => {
        nextBodyContent();
    }, time);
}

window.addEventListener('load', start);