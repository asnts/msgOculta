var cripto = document.querySelector('#selecionar'); 
var intervalo = document.querySelector(".intervalo");
var incremento = document.querySelector("#incremento");
var btn = document.querySelector ('.enviar');
var base64 = document.getElementById("base");
var cesar = document.getElementById("cdc")
var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");



// ocultando intervalo se base64 for escolhida

    intervalo.style.display = "none";
    incremento.style.display = "none";
cripto.addEventListener("change" , function () {
    intervalo.style.transition = "none";
    if (cripto.value == 'cesar'){
        intervalo.style.display = "flex";
        incremento.style.display = "flex";
    }else {
        intervalo.style.display = "none";
        incremento.style.display = "none"; 

    }
})

// adicionando o valor do intervalo

intervalo.addEventListener("change", function() {

    incremento =  document.getElementById("#incremento").value;

});

 //alterando o nome do botã0

codificar.addEventListener("change", function () {
  btn.innerHTML = "Codificar"
   
 })

 decodificar.addEventListener("change", function () {
   btn.innerHTML ="Decodificar"

 })


// codificar na  base64

var saida = document.querySelector (".saida");
var mensagem = document.querySelector('#msg');

    function codificarB64 () {
    var texto = mensagem.value;
    return btoa (texto)      
      
    }
  
    function decodificarB64(){
    var texto = mensagem.value;
    return atob (texto)
     
    }


  // Submeter resposta

btn.addEventListener("click", function (e) {
    e.preventDefault();
 
 if(cripto.value === "base64"){
    if(btn.value === "Codificar"){

        saida.innerText = codificarB64();
        
    }else{
       
        saida.innerText = decodificarB64();
    }
  
  }else if(cripto.value === "cifraCesar"){
     if (submitButton.value === "Codificar"){
        saida.innerText = codificarCesar();
     }
        
        
        
    }else{
         
         saida.innerText = decodificarCesar();
     }
 })
 



















