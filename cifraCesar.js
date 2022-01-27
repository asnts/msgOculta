var cesar = document.querySelector ("#cdc")
var code = document.querySelector("#codificar");
var decode = document.querySelector("#decodificar");
var incremento = document.querySelector("#incremento");
var saida = document.querySelector(".saida");


function codificarCesar(msg, incremento){
  msg = msg.split("");
  incremento= parseInt(incremento,10);
  var resposta = "";
  for (i = 0; i <msg.length; i++){
      var charCode = msg[i].charCodeAt ();
      if (charCode >= 65 && charCode <= 90){
          resposta += String.fromCharCode(((charCode + incremento - 65) %26) +65);
          
      }else if (charCode >=97 && charCode <=122){
          resposta += String.fromCharCode(((charCode + incremento -97)%26) +97);
      }else {
          resposta +=msg[i];
      }

  }
    return saida.innerText = resposta;
}




function decodificarCesar(msg, incremento){
    msg = msg.split("");
  incremento= parseInt(incremento,10);
  var resposta = "";
  for (i = 0; i <msg.length; i++){
      var charCode = msg[i].charCodeAt ();
      if (charCode >= 65 && charCode <= 90){
          resposta += String.fromCharCode(((charCode + incremento - 90) %26) + 90);
          
      }else if (charCode >=97 && charCode <=122){
          resposta += String.fromCharCode(((charCode + incremento -122) %26) +122);
      }else {
          resposta +=msg[i];
      }

  }
    return saida.innerText = resposta;

}


