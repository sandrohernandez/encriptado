function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado =document.getElementById("resultado");
    let texto_cifrado = texto
.replace(/e/ig, "enter")   
.replace(/i/ig, "imes")
.replace(/a/ig, "ai")
.replace(/o/ig, "ober")
.replace(/u/ig, "ufat");

if (texto.length != 0) {
    document.getElementById("texto").value = texto;
    document.getElementById("resultado").value = texto_cifrado;
    document.getElementById("titulo_mensaje").innerHTML = 'texto encriptado con exito!!';
}  else{
    alert('dedes ingresar algun texto');
}

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado =document.getElementById("resultado");
    let texto_cifrado = texto
.replace(/enter/ig, "e")   
.replace(/imes/ig, "i")
.replace(/ai/ig, "a")
.replace(/ober/ig, "o")
.replace(/ufat/ig, "u");

if (texto.length != 0) {
    document.getElementById("texto").value = texto;
    document.getElementById("resultado").value = texto_cifrado;
    document.getElementById("titulo_mensaje").innerHTML = 'texto desencriptado con exito!!';
}  else{
    alert('dedes ingresar algun texto');
}
}


function copiar() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
}