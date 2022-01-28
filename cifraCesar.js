var incremento = document.querySelector("#incremento");
var saida = document.querySelector(".saida");
var mensagem = document.querySelector('#msg');

function codificarCesar(mensagem, incremento) {
  
  mensagem = mensagem.split("");
  incremento = parseInt(incremento, 10);
  var resposta = "";

  for (i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      resposta += String.fromCharCode(((charCode + incremento - 65) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      resposta += String.fromCharCode(((charCode + incremento - 97) % 26) + 97);
    } else {
      resposta += mensagem[i];
    }
  }
  saida.value = resposta;
  
}



function decodificarCesar(mensagem, incremento) {
  console.log("decodificar")
  mensagem = mensagem.split("");
  incremento = parseInt(incremento, 10);
  var resposta = "";
  for (i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 97 && charCode <= 122) {
      resposta += String.fromCharCode(((charCode - incremento - 122) % 26) + 122);
    } else if (charCode >= 65 && charCode <= 90) {
      resposta += String.fromCharCode(((charCode - incremento - 90) % 26) + 90);
    } else {
      resposta += mensagem[i];
    }
  }
  saida.value = resposta;
  console.log(resposta)
}
