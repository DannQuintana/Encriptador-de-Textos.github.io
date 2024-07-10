function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Muñeco = document.getElementById("Muñeco");

    let textoCifrado = texto
                       .replace (/e/gi, "enter")
                       .replace (/i/gi, "imes")
                       .replace (/a/gi, "ai")
                       .replace (/o/gi, "ober")
                       .replace (/u/gi, "ufat");
                
if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con èxito";
    parrafo.textContent = "";
    Muñeco.src = "./img/encriptado.png";
    } else {
        Muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningùn mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar algùn texto");
    }
                    
}   

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Muñeco = document.getElementById("Muñeco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length !=0){
       document.getElementById("texto").value = textoCifrado;
       tituloMensaje.textContent = "Texto desencriptado con èxito";
       parrafo.textContent = "";
       Muñeco.src = "./img/desencriptado.png";

    }else {
    Muñeco.src = "./img/Muñeco.png";
    tituloMensaje.textContent = "Ningùn mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert ("Debes ingresar algùn texto");
}  
} 