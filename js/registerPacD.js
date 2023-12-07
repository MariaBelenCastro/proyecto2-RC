const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".registro");
const formRlogin = document.querySelector(".login");

btnSignUp.addEventListener("click", (e) => {
    formRegister.classList.add("hide");
    formRlogin.classList.remove("hide")
});

btnSignIn.addEventListener("click", e => {
    formRlogin.classList.add("hide")
    formRegister.classList.remove("hide");
});


const form = document.querySelector(".form");
alertify.set("notifier", "position", "top-center")

let arrayLS = [];

let nombre, apellido, dni, correo, contrasenia, controlContrasenia;

let pacientePendiente = JSON.parse(localStorage.getItem("pacientePendiente")) || [];
let dnisRegistroPendiente = new Set(pacientePendiente.map(p => p.dni));
let correoRegistroPendiente = new Set(pacientePendiente.map(p => p.email));
let contraseniaRegistroPendiente = new Set(pacientePendiente.map(p => p.password))

let paciente = JSON.parse(localStorage.getItem("paciente")) || [];
let dnisRegistro = new Set(paciente.map(p => p.dni));
let correoRegistro = new Set(paciente.map(p => p.email));
let contraseniaRegistro = new Set(paciente.map(p => p.password))

function registrarse(event) {
    event.preventDefault();
    if (!recibirInputs()) {
        // Las validaciones fallaron, no continuar con el registro
        return;
    }
    const valorLS = localStorage.getItem("pacientePendiente");
    arrayLS = [];
    if (valorLS) {
        arrayLS = JSON.parse(valorLS);
    }
    const nuevoPaciente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        email: correo,
        password: contrasenia,
        isAdmin: false
    };

    // Agregar el nuevo usuario al array
    arrayLS.push(nuevoPaciente);

    // Guardar el array actualizado en el localStorage
    
    console.log(arrayLS);
    alertify.warning(`Su registro se está procesando. La aprobación será enviada a ${correo}`)
    localStorage.setItem("pacientePendiente", JSON.stringify(arrayLS));
    form.reset();
}

function mostrarContraseña(passwordId, eyeId) {
    const passwordInput = document.getElementById(passwordId);
    const eyeIcon = document.getElementById(eyeId).querySelector("i");
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
    const iconClass = (passwordInput.type === "password") ? "fa-eye-slash" : "fa-eye";
    eyeIcon.className = `fa-solid ${iconClass}`;
}

const recibirInputs = () => {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    dni = document.getElementById("dni").value;
    correo = document.getElementById("email").value;
    contrasenia = document.getElementById("password").value;
    controlContrasenia = document.getElementById("controlPassword").value;
    if (dnisRegistro.has(dni)) {
        alertify.error("Este DNI ya está registrado. Por favor, ingrese otro DNI.");
        return false;
    }
    if (correoRegistro.has(correo)) {
        alertify.error("Este correo electrónico ya está registrado. Por favor, ingrese otro correo electrónico.");
        return false;
    }
    if (!nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ"°]{4,12}$/)) {
        alertify.error("El nombre ingresado no es válido, debe contener entre 8 y 12 caracteres alfanuméricos");
        return false;
    };
    if (!apellido.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ"°]{4,12}$/)) {
        alertify.error("El apellido ingresado no es válido, debe contener entre 4 y 12 caracteres alfanuméricos");
        return false;
    };
    if (!dni.match(/^\d{7,8}$/)) {
        alertify.error("El DNI ingresado no es válido, debe contener entre 7 y 8 dígitos numéricos");
        return false;
    }
    if (!correo.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
        alertify.error("El correo electrónico ingresado no es valido, asegurese de que su correo electrónico contenga letras en minúsculas, un @ y un .")
        return false;
    };
    if (!contrasenia.match(/^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/)) {
        alertify.error("La contraseña ingresada no es valida, asegúrese de que la primer letra sea mayúscula y algun número. La contraseña puede contener entre 8-16 carácteres alfanuméricos")
        return false;
    };
    if (contrasenia === controlContrasenia) {
    } else {
        alertify.error("Las contraseñas no coinciden")
        return false;
    };
    dnisRegistro.add(dni);
    correoRegistro.add(correo);
    return true;
}


const iniciarSesionP = (event) => {
    event.preventDefault();
    const emailLog = document.getElementById("email3").value;
    const passwordLog = document.getElementById("password3").value; 

    const user = paciente.find((item) => item.email === emailLog && item.password === passwordLog);
    // console.log(user.isAdmin)
    if (user) {
        if (user.isAdmin) {
            console.log("Redirigiendo a administradores");
            localStorage.setItem('pacienteLogueadoAdmin', JSON.stringify(user));
            window.location.href = "/pages/administrador.html";
        } else {
            console.log("Redirigiendo a médicos");
            window.location.href = "/pages/medicos.html";
        }
    } else {
        alertify.error("El usuario o la contraseña ingresada no son correctos");
    }
};
// verificarSesion();
//         window.location.href = "/pages/medicosTurnos.html";
//     } else {
//         // Usuario no encontrado, mostrar mensaje de error
//         alertify.error("El usuario o la contraseña ingresada no son correctos");
//     }
// };

function cerrarSesion() {
   localStorage.removeItem('medicoLogueado');
}



