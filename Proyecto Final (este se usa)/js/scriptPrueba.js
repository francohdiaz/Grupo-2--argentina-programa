function validarDatos() {
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let tel = $("#tel").val();
    let email = $("#email").val();
    let msj = $("#msj").val();

    // Expresion que valida email. Fuente:  https://es.stackoverflow.com/questions/19896/validar-email-con-una-funci%C3%B3n-en-javascript
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    $("#not-nombre").text("");
    $("#not-apellido").text("");
    $("#not-tel").text("");
    $("#not-email").text("");
    $("#not-msj").text("");

    if (nombre == ""){
        $("#not-nombre").text("* Complete este campo");
    }

    if (nombre.length < 3 && nombre != ""){
        $("#not-nombre").text("* Nombre muy corto.");
    }

    if (apellido == ""){
        $("#not-apellido").text("* Complete este campo");
    }

    if (apellido.length < 3 && apellido != ""){
        $("#not-apellido").text("* Apellido muy corto.");
    }

    /* "isNaN": Intenta convertir el parámetro pasado a un número.
        Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN  */

    if (isNaN(tel)){
        $("#not-tel").text("* Debe contener solamente números");
    }
    else {
        if (tel == "" || tel.length < 9 || tel.length > 11){
            $("#not-tel").text("* Ingrese entre 9 y 11 digitos");
        }
    }

    if (email == "" || (caract.test(email) == false)){
        $("#not-email").text("* Complete este campo");
    }

    if ((caract.test(email) == false) && email != ""){ 
        $("#not-email").text("* El formato del email no correponde");
    }

    if (msj == ""){
        $("#not-msj").text("* Complete este campo");
    }

    if ($("#not-nombre").val() == "" && $("#not-apellido").val() == "" && $("#not-tel").val() == "" && $("#not-email").val() == "" && $("#not-msj").val() == ""){
        alert(" Su mensaje fue enviado con exito, nos comunicaremos a la brevedad. ¡Muchas gracias por elegirnos!");
    }

}

////////////////////////////   Funcion que permite solamente letras   ///////////////////////

function soloLetras(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
    event.preventDefault();
    return false;
    }
    return true;
}

////////////////////////////   Movimiento del Spam para escribir en el input    ///////////////////////

const inputs = document.querySelectorAll('input'); //'querySelectorAll' por si colocamos  class //
inputs.forEach(input => {
    input.onfocus = function () {
        input.previousElementSibling.classList.add('top'); //previousElementSibling --> al anterior (span)//
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus'); //parentNode --> nodo padre ( es el label)//
    }
    input.onblur = () => {
        input.value = input.value.trim(); // para password//
        if (input.value.trim().length == 0) { //trim es para eliminar los espacios//
            input.previousElementSibling.classList.remove('top');
            input.previousElementSibling.classList.remove('focus');
            input.parentNode.classList.remove('focus');
        }
    }
})
