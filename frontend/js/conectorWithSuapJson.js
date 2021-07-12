(async() => {

    //abrir arquivos de dados (json)
    const response = await fetch('../suap.json');
    const data = await response.json();

    // formatar os dados para enviar para o html
    const htmlList = data
        .map(body => body
            .map(item => `<div class="bodyContentSuap">${item.innerHTML}</div>`))
        .join('');

    //colocar no html
    document.querySelector('.portarias').innerHTML = htmlList;
})();