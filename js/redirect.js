// Redirecciona al index si el usuario esta logeado
const userLogged = JSON.parse(localStorage.getItem("userLogged"));
window.addEventListener("load", function () {
  if(userLogged){
      window.location.href="http://127.0.0.1:5501/index.html"
  }
});
