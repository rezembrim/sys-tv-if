(async() => {

    //abrir arquivos de dados (json)
    const response = await fetch('../suap.json');
    const data = await response.json();

    // formatar os dados para enviar para o html
    const htmlList = data
        .map(({ src }) => `<iframe class="pages" src="${src}"></iframe>`)
        .join('');

    //colocar no html
    document.querySelector('#page').innerHTML = htmlList;

    /**
     * Aqui é gambiarra para
     * manipular o DOM da 
     * class pages.
     */
    const delay = 10;
    var time = delay * 1000,
        currentBodySuapIndex = 0,
        bodyContent = document.querySelectorAll('.pages'),
        max = bodyContent.length;


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
        const n = [...bodyContent]
        for (let index = 1; index < max; index++) {
            n[index].style.display = 'none'
        }
    }

    initDisplayNoneInBodyContents();
    window.addEventListener('load', start);
})();