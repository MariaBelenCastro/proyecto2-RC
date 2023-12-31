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

let nombre, apellido, dni, correo, contrasenia, controlContrasenia, matricula;

let medico = JSON.parse(localStorage.getItem("medico")) || [];
let dnisRegistro = new Set(medico.map(m => m.dni));
let correoRegistro = new Set(medico.map(m => m.email));
let contraseniaRegistro = new Set(medico.map(m => m.password))

function registrarse(event) {
    event.preventDefault();
    if (!recibirInputs()) {
        // Las validaciones fallaron, no continuar con el registro
        return;
    }
    const valorLS = localStorage.getItem("medico");
    arrayLS = [];
    if (valorLS) {
        arrayLS = JSON.parse(valorLS);
    }
    const nuevoMedico = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        matricula: matricula,
        email: correo,
        password: contrasenia,
    };

    // Agregar el nuevo usuario al array
    arrayLS.push(nuevoMedico);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("medico", JSON.stringify(arrayLS));

    console.log(arrayLS);
    alertify.success("Su registro se completó correctamente")
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
    apellido = document.getElementById("nombre").value;
    dni = document.getElementById("dni").value;
    correo = document.getElementById("email").value;
    matricula = document.getElementById("matricula").value;
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
        alertify.error("El nombre ingresado no es válido, debe contener entre 4 y 18 caracteres alfanuméricos");
        return false;
    };
    if (!nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ"°]{4,12}$/)) {
        alertify.error("El apellido ingresado no es válido, debe contener entre 4 y 12 caracteres alfanuméricos");
        return false;
    };
    if (!dni.match(/^\d{7,8}$/)) {
        alertify.error("El DNI ingresado no es válido, debe contener entre 7 y 8 dígitos numéricos");
        return false;
    }
    if (!matricula.match(/^\d{4,12}$/)) {
        alertify.error("La matrícular ingresada no es válida, debe contener entre 4 y 12 dígitos numéricos");
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
    console.log(passwordLog)
    const user = medico.find((item) => item.email === emailLog && item.password === passwordLog);
    if (user) {
      // Usuario Logeado
      localStorage.setItem("userLogged", JSON.stringify(user));
      window.location.href = "http://127.0.0.1:5501/medico.html";
    } else {
      // Usuario no encontrado, mostrar mensaje de error
      alertify.error("El usuario o la contraseña ingresada no son correctos");
    }
};
