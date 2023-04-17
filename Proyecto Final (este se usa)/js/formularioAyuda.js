const formulario = document.getElementById('formConsulta');
const inputs = document.querySelectorAll('#formConsulta input');
const textArea = document.querySelectorAll('#formConsulta textarea');

const expresionesCopia = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    reclamo:/^[a-zA-ZÀ-ÿ\s]{1,100}$/
}

const campos ={
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
    reclamo: false
}

const validarForm = (e) =>{
    switch (e.target.name){
        case "usuario": 
        validarCampo(expresionesCopia.usuario, e.target, 'gpoUser', 'usuario');
        break;
        case "nom": 
        validarCampo(expresionesCopia.nombre, e.target, 'gpoNom', 'nombre');
        break; 
        /*case "pass": 
        validarCampo(expresionesCopia.password, e.target, 'gpoPass', 'password');
        break; 
        case "pass2": 
        validarPassword2();
        break; */
        case "mail": 
        validarCampo(expresionesCopia.correo, e.target, 'gpoMail','correo');
        break; 
        case "tel": 
        validarCampo(expresionesCopia.telefono, e.target, 'gpoTel','telefono');
        break;
        case "reclamo":
        validarCampo(expresionesCopia.reclamo, e.target,'gpoReclamo','reclamo');    
        break; 
       
    }
};

const validarCampo = (expresion, input, campo, nomCampo )=>{
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove('formConsulta_gpo-incorrecto');
        document.getElementById(campo).classList.add('formConsulta_gpo-correcto');
        document.querySelector( `#${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo} .formError`).classList.remove('formError-activo');
        campos[nomCampo]=true;
    }else{
        document.getElementById(`${campo}`).classList.add('formConsulta_gpo-incorrecto');
        document.getElementById(`${campo}`).classList.remove('formConsulta_gpo-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${campo} .formError`).classList.add('formError-activo');
        campos[nomCampo]=false;
    }

};
/*
const validarPassword2 = () => {
    //acceder a los dos input de password
    const inputPassword1 = document.getElementById('pass');
	const inputPassword2 = document.getElementById('pass2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById('gpoPass2').classList.add('formConsulta_gpo-incorrecto');
        document.getElementById('gpoPass2').classList.remove('formConsulta_gpo-correcto');
        document.querySelector('#gpoPass2 i').classList.add('fa-circle-xmark');
        document.querySelector('#gpoPass2 i').classList.remove('fa-check-circle');
        document.querySelector('#gpoPass2 .formError').classList.add('formError-activo');
        campos['password']=false;
	} else {
		document.getElementById('gpoPass2').classList.remove('formConsulta_gpo-incorrecto');
        document.getElementById('gpoPass2').classList.add('formConsulta_gpo-correcto');
        document.querySelector('#gpoPass2 i').classList.remove('fa-circle-xmark');
        document.querySelector('#gpoPass2 i').classList.add('fa-check-circle');
        document.querySelector('#gpoPass2 .formError').classList.remove('formError-activo');
        campos['password']=true;
	}
}   */
//para comprobar cuando el usuario escriba o de un click afuera
//quiero que por cada inputs le ejecutes un codigo, con una funcion del tipo flecha
//se va ejecutar por cada uno de los inputs que tengamos en la pagina 
inputs.forEach((input)=>{ //por cada input agrego un EventListener que controla cuando se presionan las teclas y se ejecuta la funcion validarForm y blur para cuando hacemos clic afuera del formulario
        input.addEventListener('keyup', validarForm);
        input.addEventListener('blur',validarForm);
} );
textArea.forEach((textarea)=>{
        textarea.addEventListener('keyup',validarForm);
        textarea.addEventListener('blur',validarForm);
});



formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    //formulario.reset();
    /*console.log('user: '+campos.usuario);
    console.log('nom: '+campos.nombre);
    console.log('pass:' +campos.password);
    console.log('tel: '+campos.telefono);
    console.log('email: '+campos.correo);
    console.log('reclamo: '+campos.reclamo);*/

    const terminos = document.getElementById('terminos');

    if (campos.usuario && campos.nombre && campos.telefono && campos.correo && campos.reclamo && terminos.checked) {
        console.log('tel: '+campos.telefono);
        formulario.reset();
        console.log('nom: '+campos.nombre);
        document.getElementById('formExito').classList.add('formExito-activo');
        setTimeout( ()=>{
            document.getElementById('formExito').classList.remove('formExito-activo');
        },2000  );
        
        document.querySelectorAll('.formVaildar__Estado').forEach( (icono)=> {
            icono.classList.remove('formVaildar__Estado');
        }
        );
        
    }else{
       
        document.getElementById('formMensaje').classList.add('formMensaje-activo');
        setTimeout( ()=>{
            document.getElementById('formMensaje').classList.remove('formMensaje-activo');
        },2000  );
    }
});//es para de modo ejemplo no necesitamos que se nos actualice la url cada vez que presionamos enviar


