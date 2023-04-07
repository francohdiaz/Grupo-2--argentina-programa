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




form.addEventListener("submit", e=>{
    e.preventDefault()

    //let warning = ""
    let warningNom = ""; warningApe =""; warningEmail = ""; warningPass = ""

    let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let entrar = false


   // parrafo.innerHTML = ""
    parrafoN.innerHTML=""
    parrafoA.innerHTML=""
    parrafoE.innerHTML=""
    parrafoP.innerHTML=""

    if (nombre.value.length < 4){
        warningNom += 'El nombre no es valido, porque es muy corto'
        entrar = true
    }

    if (apellido.value.length < 4){
        warningApe += 'El apellido no es valido, porque es muy corto'
        entrar = true
    }

    if (!validEmail.test(email.value)){
        warningEmail += 'El email no es valido'
        entrar = true
    }

    if (pass.value.length < 8){
        warningPass += 'La contraseña no es valido, debe contener al menos 8 caracteres'
        entrar = true
    }

    if(entrar){
        //parrafo.innerHTML = warning
        parrafoN.innerHTML= warningNom
        parrafoA.innerHTML= warningApe
        parrafoE.innerHTML= warningEmail
        parrafoP.innerHTML= warningPass
    }
})