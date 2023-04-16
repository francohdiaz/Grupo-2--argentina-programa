    /* validar registro */

    function validarRegistro() {
  
        var nombre = nombreInput.value.trim();
        var apellido = apellidoInput.value.trim();
        var email = emailInput.value.trim();
        var pass = passInput.value.trim();

        if (nombre === "" || apellido === "" || email === "" || pass === "") {
            alert("Por favor completa todos los campos.");
            return;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            alert("Los campos de nombre y apellido solo pueden contener letras.");
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor ingresa una dirección de correo electrónico válida.");
            return;
        } else if (pass.length < 8) {
            alert("La contraseña debe contener al menos 8 caracteres.");
            return;
        }  
        if (confirm("¿Estás seguro de que quieres registrarte?")) {
            alert("Registro exitoso.");
        }
    }

    /* validar el ingreso */

    function validarIngresar() {
        var nombre = nombreInput.value.trim();
        var pass = passInput.value.trim();
      
        if (nombre === "" || pass === "") {
          alert("Por favor completa todos los campos.");
          return;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
          alert("El campo de nombre solo puede contener letras.");
          return;
        } else if (pass.length < 8) {
          alert("La contraseña debe contener al menos 8 caracteres.");
          return;
        }
      
        if (confirm("¿Estás seguro de que quieres ingresar?")) {
          alert("Ingreso exitoso.");
        }
      }

      /* contactar */
      function contactar() {
  
        var nombre = nombreInput.value.trim();
        var apellido = apellidoInput.value.trim();
        var email = emailInput.value.trim();
        var numero = telInput.value.trim();
        var message = messageInput.value.trim();

        if (nombre === "" || apellido === "" || email === "" || numero === "" || message === "") {
            alert("Por favor completa todos los campos.");
            return;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            alert("Los campos de nombre y apellido solo pueden contener letras.");
            return;
       
        }  else if (/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(numero)) {
            alert ("ingrese número de telefono válido");
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor ingresa una dirección de correo electrónico válida.");
        return;
        }
        if (confirm("¿Estás seguro de que desea contactarnos?")) {
            alert("solicitud de contacto exitosa, nos comunicaremos a la brevedad");
        }
    }

