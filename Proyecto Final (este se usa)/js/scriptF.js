function validacion() {
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const form = document.getElementById("form")
    //const parrafo = document.getElementById("warning")
    const parrafoN = document.getElementById("warningNom")
    const parrafoA = document.getElementById("warningApe")
    const parrafoE = document.getElementById("warningEmail")
    const parrafoP = document.getElementById("warningPass")


    form.addEventListener("submit", e => {
        e.preventDefault()

        //let warning = ""
        let warningNom = ""; warningApe = ""; warningEmail = ""; warningPass = ""

        let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        let entrar = false


        // parrafo.innerHTML = ""
        parrafoN.innerHTML = ""
        parrafoA.innerHTML = ""
        parrafoE.innerHTML = ""
        parrafoP.innerHTML = ""

        if (nombre.value.length < 3) {
            warningNom += 'El nombre no es valido porque es muy corto'
            entrar = true
        }

        if (apellido.value.length < 3) {
            warningApe += 'El apellido no es valido porque es muy corto'
            entrar = true
        }

        if (!validEmail.test(email.value)) {
            warningEmail += 'El email no es valido'
            entrar = true
        }

        if (pass.value.length < 8) {
            warningPass += 'La contraseña no es valido, debe contener al menos 8 caracteres'
            entrar = true
        }

        if (entrar) {
            //parrafo.innerHTML = warning
            parrafoN.innerHTML = warningNom
            parrafoA.innerHTML = warningApe
            parrafoE.innerHTML = warningEmail
            parrafoP.innerHTML = warningPass
        }
    })
}


function Jinput() {
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
}