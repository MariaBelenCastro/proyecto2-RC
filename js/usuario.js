// Script creado en caso de agregar funcion "Modificar Usuario"


// Modifica navbar con información de usuario
window.addEventListener("load", function () {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  const editPaciente = document.getElementById("editPaciente");
  const editMedico = document.getElementById("editMedico");
  // Si el usuario no esta logeado se redirige a la página correcta
  if (userLogged) {
    if (userLogged.matricula != null){
      editMedico.style.display = "block";
      editPaciente.style.display = "none";
    }
  }
  else{
    window.location.href="http://127.0.0.1:5501/pages/resgierPacD.html"
  }
  });


// Eventos

const btnGuardarPaciente = document.getElementById("savePaciente");
const btnGuardarMedico = document.getElementById("saveMedico");

// Agregar un controlador de eventos al botón "Guardar"
btnGuardarPaciente.addEventListener("click", function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const email = document.getElementById("email").value;
  const nuevoNombre = document.getElementById("nombre").value;
  const nuevoApellido = document.getElementById("apellido").value;
  const nuevoDni = document.getElementById("dni").value;
  const nuevaContrasenia = document.getElementById("password").value;

  // Llamar a la función modificar() con los parámetros correspondientes
  modificarPaciente(email, nuevoNombre, nuevoApellido, nuevoDni, nuevaContrasenia);
});

// Agregar un controlador de eventos al botón "Guardar"
btnGuardarMedico.addEventListener("click", function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const email = document.getElementById("emailMedico").value;
  const nuevoNombre = document.getElementById("nombreMedico").value;
  const nuevoApellido = document.getElementById("apellidoMedico").value;
  const nuevoDni = document.getElementById("dniMedico").value;
  const nuevaMatricula = document.getElementById("matriculaMedico").value;
  const nuevaContrasenia = document.getElementById("passwordMedico").value;
  

  // Llamar a la función modificar() con los parámetros correspondientes
  modificarMedico(email, nuevoNombre, nuevoApellido, nuevoDni, nuevaMatricula, nuevaContrasenia);
});

// Funciones

  function modificarPaciente(email, nuevoNombre, nuevoApellido, nuevoDni, nuevaContrasenia) {
    // Recuperar el array de usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("pacientePendiente"));
  
    // Buscar el usuario que deseas modificar
    const usuario = usuarios.find((u) => u.email === email);
  
    if (usuario) {
      // Actualizar las propiedades del usuario
      usuario.nombre = nuevoNombre;
      usuario.apellido = nuevoApellido;
      usuario.dni = nuevoDni;
      usuario.password = nuevaContrasenia;
  
      // Guardar el array actualizado en el localStorage
      localStorage.setItem("paciente", JSON.stringify(usuarios));
  
      console.log("Usuario modificado correctamente");
    } else {
      console.log("No se encontró el usuario");
    }
  }
  function modificarMedico(email, nuevoNombre, nuevoApellido, nuevoDni, nuevaMatricula, nuevaContrasenia) {
    // Recuperar el array de usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("pacientePendiente"));
  
    // Buscar el usuario que deseas modificar
    const usuario = usuarios.find((u) => u.email === email);
  
    if (usuario) {
      // Actualizar las propiedades del usuario
      usuario.nombre = nuevoNombre;
      usuario.apellido = nuevoApellido;
      usuario.dni = nuevoDni;
      usuario.password = nuevaContrasenia;
      usuario.matricula = nuevaMatricula;
  
      // Guardar el array actualizado en el localStorage
      localStorage.setItem("medico", JSON.stringify(usuarios));
  
      console.log("Usuario modificado correctamente");
    } else {
      console.log("No se encontró el usuario");
    }
  }

  function mostrarContraseña(passwordId, eyeId) {
    const passwordInput = document.getElementById(passwordId);
    const eyeIcon = document.getElementById(eyeId).querySelector("i");
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
    const iconClass = (passwordInput.type === "password") ? "fa-eye-slash" : "fa-eye";
    eyeIcon.className = `fa-solid ${iconClass}`;
}

