function validarDatosR() {
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let email = $("#email").val();
    let pass = $("#pass").val();

    // Expresion que valida email. Fuente:  https://es.stackoverflow.com/questions/19896/validar-email-con-una-funci%C3%B3n-en-javascript
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    $("#not-nombre").text("");
    $("#not-apellido").text("");
    $("#not-email").text("");
    $("#not-pass").text("");

    if (nombre == ""){
        $("#not-nombre").text("* Complete este campo");
        return false;
    }

    if (nombre.length < 3 && nombre != ""){
        $("#not-nombre").text("* Nombre muy corto.");
        return false;
    }

    if (apellido == ""){
        $("#not-apellido").text("* Complete este campo");
        return false;
    }

    if (apellido.length < 3 && apellido != ""){
        $("#not-apellido").text("* Apellido muy corto.");
        return false;
    }

    if (email === ""){
        $("#not-email").text("* Complete este campo");
        return false;
    }

    if ((caract.test(email) == false) && email != ""){ 
        $("#not-email").text("* El formato no correponde. Ej: nombre@ejemplo.com");
        return false;
    }

    if (pass === ""){
        $("#not-pass").text("* Complete este campo");
        return false;
    }

    if (pass.length < 8 || pass.length > 12){
        $("#not-pass").text("* Debe contener entre 8 y 12 caracteres");
        return false;
    }

    alert(" Su registro fue exitoso. ¡Muchas gracias por elegirnos!");
    return true;
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