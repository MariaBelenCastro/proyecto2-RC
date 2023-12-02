// Modifica navbar con información de usuario
const btnTurno = document.getElementById("pedirTurno");

window.addEventListener("load", function () {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  const userLog = document.getElementById("userLog");
  const noUser = document.getElementById("noUser");
  if (userLogged) {
    userLog.innerHTML = `<a href="pages/index.html" class="text-white">${userLogged.nombre} ${userLogged.apellido}</a>`;
    noUser.style.display ="none";
  } else {
    // Si el usuario no está logeado, mostrar el elemento li con el id "noUser"
    noUser.style.display = "block";
    userLog.style.display = "none";
  }
});
function pedirTurno() {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged){
    window.location.href="http://127.0.0.1:5501/pages/pedirTurno.html";
  }
  else {
    alert("Error debe ingresar primero");
  }
};
