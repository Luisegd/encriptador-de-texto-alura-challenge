const inputTexto = document.querySelector(".texto");
const inputMensaje = document.querySelector(".mensaje");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btncopiar = document.querySelector(".copiar");


function encriptar(){
    var texto = inputTexto.value;
    var mensaje = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("ocultar").style.display = "none";
    document.getElementById("copy").style.display = "block";

    inputMensaje.value = mensaje;
}

function desencriptar(){
    var mensaje = inputTexto.value;
    var texto = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    document.getElementById("ocultar").style.display = "none";
    document.getElementById("copy").style.display = "block";

    inputMensaje.value = texto;
}

function validacion(){
    Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text: 'Solo se permiten letras minúsculas y sin acento.'
    });
}

function paraEncriptar(){
    if(inputTexto.value.match(/^[a-z,ñ,¿,?,¡,! ]*$/)) {
            encriptar();
        }
        else{
            validacion();
            inputTexto.value = '';
        }
}

function paraDesencriptar(){
    if(inputTexto.value.match(/^[a-z,ñ,¿,?,¡,! ]*$/)) {
            desencriptar();
        }
        else{
            validacion();
            inputTexto.value = '';
        }
}

function textocopiado(){
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',  
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    });
}

function copiar(){
    var mensaje = inputMensaje.value;
    
    navigator.clipboard.writeText(mensaje).then(() =>{
        inputTexto.value = '';
        textocopiado();
    })
}


btnEncriptar.onclick = paraEncriptar;

btnDesencriptar.onclick = paraDesencriptar;

btncopiar.onclick = copiar;