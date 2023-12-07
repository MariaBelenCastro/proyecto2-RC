window.onload = cargarTurnos;
console.log("Se está ejecutando");

function obtenerMedicoLogueado() {
    const medicoLogueado = JSON.parse(localStorage.getItem('medicoLogueado'));
    return medicoLogueado || null;
}

const medicoLogueado = obtenerMedicoLogueado();
console.log(medicoLogueado.dni);

function cargarTurnos() {
    cargarTabla('turnos-pendientes-table', 'turnoPendiente');
    cargarTabla('turnos-aprobados-table', 'turno');
}

function cargarTabla(tablaId, tipoTurno) {
    let turnos = JSON.parse(localStorage.getItem(tipoTurno)) || [];
    let tabla = document.getElementById(tablaId).getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    let contador = 0;

    turnos.forEach((turno, index) => {
        if (medicoLogueado && turno.dniMedico === medicoLogueado.dni) {
            let fila = tabla.insertRow();
            fila.id = `fila-${tablaId}-${index}`;

            let celdaContador = fila.insertCell();
            celdaContador.innerText = ++contador;

            fila.insertCell().innerText = turno.paciente;
            fila.insertCell().innerText = turno.dia;
            fila.insertCell().innerText = turno.horario;
        }
    });
}

window.onload = cargarTurnos;
document.getElementById('userActionButton').addEventListener('click', userAction);

function userAction() {
    if (medicoLogueado) {
        cerrarSesion();
    } else {
        window.location.href = "index.html";
    }
}

function cerrarSesion() {
    localStorage.removeItem('medicoLogueado');
    window.location.href = "index.html";
}