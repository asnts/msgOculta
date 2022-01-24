// let input = document.getElementById('msg')
// let base64 = document.getElementById("base");
// let codificar = document.querySelector("#codificar");
// let decodificar = document.querySelector("#decodificar");
// let btn = document.getElementById ('btn');
let saida = document.getElementById("saida");

function codificarBase(msg){
    var text = btoa(msg);
    saida.innerText = text;
}


function decodificarBase (texto){
    var msg  = atob(texto);
    saida.innerText = msg;
}







