(async() => {

    //abrir arquivos de dados (json)
    const response = await fetch('../suap.json');
    const data = await response.json();

    // formatar os dados para enviar para o html
    const htmlList = data
        .map(({ src }) => `<iframe class="page" src="${src}"></iframe>`)
        .join('');

    //colocar no html
    document.querySelector('#pages').innerHTML = htmlList;

    /**
     * Aqui é gambiarra para
     * manipular o DOM da 
     * class page.
     */
    const delay = 10;
    var time = delay * 1000,
        currentBodySuapIndex = 0,
        bodyContent = document.querySelectorAll('.page'),
        max = bodyContent.length;


    function removeAllContent() {
        bodyContent.forEach(content => content
            .className = content
            .className
            .replace(" selected", ""));
    }

    function nextBodyContent() {
        removeAllContent();
        currentBodySuapIndex++;

        if (currentBodySuapIndex >= max)
            currentBodySuapIndex = 0;

        bodyContent[currentBodySuapIndex]
            .className += " selected";
    }

    function start() {
        setInterval(() => {
            nextBodyContent();
        }, time);
    }

    removeAllContent();
    bodyContent[0].className += " selected";
    window.addEventListener('load', start);
})();