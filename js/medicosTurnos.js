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

            // Agrega el botón de Historia Clínica
            let celdaHistoriaClinica = fila.insertCell();
            let btnHistoriaClinica = document.createElement('button');
            btnHistoriaClinica.innerText = 'Historia Clínica';
            btnHistoriaClinica.classList.add('btn', 'btn-primary');
            btnHistoriaClinica.addEventListener('click', () => mostrarHistoriaClinica(turno.paciente, tipoTurno));
            celdaHistoriaClinica.appendChild(btnHistoriaClinica);
        }
    });
}

function mostrarHistoriaClinica(paciente, tipoTurno) {
    // Buscar el turno correspondiente al paciente en el array correspondiente
    let pacienteTurno = tipoTurno === 'turno' ? turno.find(turno => turno.paciente === paciente) : turnoPendiente.find(turno => turno.paciente === paciente);

    if (pacienteTurno && pacienteTurno.historiaClinica) {
        // Extraer la información de la historia clínica
        const historiaClinica = pacienteTurno.historiaClinica;

        // Construir el mensaje para el alert
        const mensajeAlert = `
            Nombre: ${paciente}
            Edad: ${historiaClinica.edad}
            Fecha de Consulta: ${historiaClinica.fechaConsulta}
            Diagnóstico: ${historiaClinica.diagnostico}
            Tratamiento: ${historiaClinica.tratamiento}
            Notas: ${historiaClinica.notas}
        `;

        // Mostrar el alert con la historia clínica
        alert(mensajeAlert);
    } else {
        alert(`No se encontró la historia clínica para ${paciente}`);
    }
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
