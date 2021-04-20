var data;

function formataData() {
    data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    document.getElementById('date').innerHTML = dia + '/' + mes;
}

setInterval(formataHoraMinuto, 1000);

function formataHoraMinuto() {

    data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    hora = ('0' + hora).slice(-2);
    minuto = ('0' + minuto).slice(-2);
    segundo = ('0' + segundo).slice(-2);

    console.log(document.getElementById('clock').innerHTML = hora + ':' + minuto + ':' + segundo);
    formataData()

}