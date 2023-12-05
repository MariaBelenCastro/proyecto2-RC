const user = JSON.parse(localStorage.getItem("userLogged")) || false; //en el caso de que haya algo dentro del local storage se guarda en login sino es false

if(!user){
    window.location.href = "inicioSesion.html";
}
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", ()=>{   //esto agregamos para cerrar sesion
    alert("Hasta pronto!");
    localStorage.removeItem("userLogged"); //me borra la cuenta iniciada del localStorage cuando cierre sesion
    window.location.href = "inicioSesion.html";
})