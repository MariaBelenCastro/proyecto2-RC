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

let nombre, dni, correo, contrasenia, controlContrasenia;

let pacientes = JSON.parse(localStorage.getItem("pacientePendiente")) || [];
let dnisRegistro = new Set(pacientes.map(p => p.dni));
let correoRegistro = new Set(pacientes.map(p => p.email));
let contraseniaRegistro = new Set(pacientes.map(p => p.password))

function registrarse(event) {
    event.preventDefault();
    if (!recibirInputs()) {
        // Las validaciones fallaron, no continuar con el registro
        return;
    }
    const valorLS = localStorage.getItem("pacientPendiente");
    arrayLS = [];
    if (valorLS) {
        arrayLS = JSON.parse(valorLS);
    }
    const nuevoPaciente = {
        nombre: nombre,
        dni: dni,
        email: correo,
        password: contrasenia,
        isAdmin: false
    };

    // Agregar el nuevo usuario al array
    arrayLS.push(nuevoPaciente);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("pacientePendiente", JSON.stringify(arrayLS));

    console.log(arrayLS);
    alertify.warning(`Su registro se está procesando. La aprobación será enviada a ${correo}`)
    form.reset();

    // dnisRegistro.add(dni);
    // localStorage.setItem("dnisRegistro", JSON.stringify(Array.from(dnisRegistro)));
    // localStorage.setItem("correoRegistro", JSON.stringify(Array.from(correoRegistro)));
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
    if (!nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ"° ]{8,18}$/)) {
        alertify.error("El nombre ingresado no es válido, debe contener entre 8 y 18 caracteres alfanuméricos");
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

const iniciarSesion = (event) => {
    event.preventDefault();
    const emailLog = document.getElementById("email2").value;
    const passwordLog = document.getElementById("password2").value;
    const user = pacientes.find((item) => item.email === emailLog && item.password === passwordLog);
    if (user) {
        // Usuario encontrado, redirigir según el estado del usuario
        if (user.isAdmin) {
            window.location.href = "registerPacD.html";
        } else {
            window.location.href = "registerPacD.html";
        }
    } else {
        // Usuario no encontrado, mostrar mensaje de error
        alertify.error("El usuario o la contraseña ingresada no son correctos");
    }
};

