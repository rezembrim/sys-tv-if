var data;

setInterval(formataHoraMinuto, 1000);
teste();

function formataHoraMinuto() {
    data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    hora = ('0' + hora).slice(-2);
    minuto = ('0' + minuto).slice(-2);
    segundo = ('0' + segundo).slice(-2);

    document.getElementById('clock').innerHTML = hora + ':' + minuto + ':' + segundo;
    formataData();
}

function formataData() {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    document.getElementById('date').innerHTML = dia + '/' + mes;
}