const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".registro");
const formRlogin = document.querySelector(".login");

btnSignUp.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formRlogin.classList.remove("hide")
});

btnSignIn.addEventListener("click", e => {
    formRlogin.classList.add("hide")
    formRegister.classList.remove("hide");
});


const form = document.querySelector(".form");

alertify.set('notifier','position', 'top-center')

let arrayLS = [];


function registrarse(event){
    event.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value
    const correo = document.getElementById('email').value
    const contrasenia = document.getElementById('password').value
    const controlContrasenia = document.getElementById('controlPassword').value
    if (!nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{8,18}$/)){
        alertify.error("El nombre ingresado no es válido, debe contener entre 8 y 18 caracteres alfanuméricos");
        return;
    };
    if (!dni.match(/^\d{7,8}$/)) {
        alertify.error("El DNI ingresado no es válido, debe contener entre 7 y 8 dígitos numéricos");
        return;
    }
    if (!correo.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
        alertify.error("El mail ingresado no es valido, asegurese de que su email contenga letras en minúsculas, un @ y un .")
        return
    };
    if (!contrasenia.match(/^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/)){
        alertify.error("La contraseña ingresada no es valida, asegúrese de que la primer letra sea mayúscula y algun número. La contraseña puede contener entre 8-16 carácteres alfanuméricos")
        return
    };
    if (contrasenia===controlContrasenia){
    }else{
        alertify.error("Las contraseñas no coinciden")
        return
    };
    const valorLS = localStorage.getItem("paciente");
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
    localStorage.setItem("paciente", JSON.stringify(arrayLS));

    console.log(arrayLS);
}

// const resetearValores = (() => {
//     nombre.
// }) 


function mostrarContraseña(passwordId, eyeId) {
    const passwordInput = document.getElementById(passwordId);
    const eyeIcon = document.getElementById(eyeId).querySelector('i');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
    const iconClass = (passwordInput.type === 'password') ? 'fa-eye-slash' : 'fa-eye';
    eyeIcon.className = `fas ${iconClass}`;
}


