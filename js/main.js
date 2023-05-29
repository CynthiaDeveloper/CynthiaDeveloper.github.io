
function Encryption(){
    var text = document.getElementById("textEncryptor").value.toLowerCase();
    //var textoSinAcentos = removerAcentos(text);
    

    var textEncryption = text.replace(/e/img, "enter");
    var textEncryption = textEncryption.replace(/o/img, "ober");
    var textEncryption = textEncryption.replace(/i/img, "imes");
    var textEncryption = textEncryption.replace(/a/img, "ai");
    var textEncryption = textEncryption.replace(/u/img, "ufat");

    document.getElementById("textDesencryptor").style.display="show";
    document.getElementById("textDesencryptor").style.display="inherit";
    document.getElementById("noMessage").style.display="none";
    document.getElementById("btnCopy").style.display="show";
    document.getElementById("btnCopy").style.display="block";
    document.getElementById("textDesencryptor").innerHTML = textEncryption;
    
}

function validarEntrada(event) {
    var text = event.target.value;
    var textoSinAcentos = removerAcentos(text);
    var textoSinMayusculas = textoSinAcentos.toLowerCase();
    var textoFiltrado = textoSinMayusculas.replace(/[^a-z0-9\s]/g, '');
    event.target.value = textoFiltrado;
  }
  
  function removerAcentos(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

//function removerAcentos(text) {
//     return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 // }

function Desencryption(){
    var text = document.getElementById("textEncryptor").value.toLowerCase();

    var textEncryption = text.replace(/enter/img, "e");
    var textEncryption = textEncryption.replace(/ober/img, "o");
    var textEncryption = textEncryption.replace(/imes/img, "i");
    var textEncryption = textEncryption.replace(/ai/img, "a");
    var textEncryption = textEncryption.replace(/ufat/img, "u");

    document.getElementById("textDesencryptor").style.display="show";
    document.getElementById("textDesencryptor").style.display="inherit";
    document.getElementById("noMessage").style.display="none";
    document.getElementById("btnCopy").style.display="show";
    document.getElementById("btnCopy").style.display="inherit";
    document.getElementById("textDesencryptor").innerHTML = textEncryption;


}

function Copy() {
    var content = document.querySelector("#textDesencryptor");
    content.select();
    document.execCommand("copy");
}


var textarea1 = document.getElementById('textDesencryptor');
var textarea2 = document.getElementById('textEncryptor');
var limpiarBtn = document.getElementById('btnClear');

limpiarBtn.addEventListener('click', function() {
    textarea1.value = '';
    textarea2.value = '';
  });

