function obtenerMedicoLogueado() {
    // Lógica para obtener el médico logueado, puede ser desde localStorage, sessionStorage, u otro método.
    const medicoLogueado = JSON.parse(localStorage.getItem('medicoLogueado'));
    return medicoLogueado || null;
}

const medicoLogueado = obtenerMedicoLogueado();

function cargarTurnos() {
    let turnosPendientes = JSON.parse(localStorage.getItem('turnoPendiente')) || [];
    let tabla = document.getElementById('turnos-table').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    console.log(medicoLogueado)
    turnosPendientes.forEach((turno, index) => {
        console.log(turno.medicoDNI)
        // Verifica que haya un médico logueado antes de intentar acceder a su propiedad 'dni'
        if (medicoLogueado) {
            let fila = tabla.insertRow();
            fila.insertCell().innerText = turno.paciente;
            fila.insertCell().innerText = turno.especialista;
            fila.insertCell().innerText = turno.horario;
            fila.insertCell().innerText = turno.consulta;
            fila.insertCell().innerText = turno.dia;

            let acciones = fila.insertCell();
            let botonAprobar = document.createElement('button');
            botonAprobar.innerText = 'Aprobar';
            botonAprobar.className = 'btn btn-success';
            botonAprobar.onclick = function() {
                aprobarTurno(index);
            };
            acciones.appendChild(botonAprobar);
        }
    });
}

// Llamar a la función al cargar la página
window.onload = cargarTurnos;

// Aprueba un turno
function aprobarTurno(index) {
    let turnosPendientes = JSON.parse(localStorage.getItem('turnoPendiente')) || [];
    let turno = turnosPendientes.splice(index, 1)[0];

    let turnosAprobados = JSON.parse(localStorage.getItem('turno')) || [];
    turnosAprobados.push(turno);

    localStorage.setItem('turnoPendiente', JSON.stringify(turnosPendientes));
    localStorage.setItem('turno', JSON.stringify(turnosAprobados));

    cargarTurnos();
}

// Carga los turnos al cargar la página
window.onload = cargarTurnos;