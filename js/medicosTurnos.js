window.onload = cargarTurnos;
console.log("Se está ejecutando");

function obtenerMedicoLogueado() {
    const medicoLogueado = JSON.parse(localStorage.getItem('medicoLogueado'));
    return medicoLogueado || null;
}

const medicoLogueado = obtenerMedicoLogueado();

function cargarTurnos() {
    cargarTabla('turnos-table', 'turnoPendiente');
    cargarTabla('turnos-aprobados-table', 'turno');
}

// Cargar tabla de turnos
function cargarTabla(tablaId, tipoTurno) {
    let turnos = JSON.parse(localStorage.getItem(tipoTurno)) || [];
    let tabla = document.getElementById(tablaId).getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    
    let contador = 0;  

    turnos.forEach((turno, index) => {
        if (medicoLogueado && turno.dniMedico === medicoLogueado.dni) {
            let fila = tabla.insertRow();
            
            // Columna del contador
            let celdaContador = fila.insertCell();
            celdaContador.innerText = ++contador;  

            fila.insertCell().innerText = turno.paciente;
            fila.insertCell().innerText = turno.horario;
            fila.insertCell().innerText = turno.consulta;
            fila.insertCell().innerText = turno.dia;


            let acciones = fila.insertCell();
            if (tipoTurno === 'turno') {
                let botonHistoriaClinica = document.createElement('button');
                botonHistoriaClinica.innerText = 'Historia Clínica';
                botonHistoriaClinica.className = 'btn btn-info';
                botonHistoriaClinica.setAttribute('data-bs-toggle', 'modal');
                botonHistoriaClinica.setAttribute('data-bs-target', '#historiaClinicaModal');
                acciones.appendChild(botonHistoriaClinica);
            } else {
                let botonAprobar = document.createElement('button');
                botonAprobar.innerText = 'Aprobar';
                botonAprobar.className = 'btn btn-success';
                botonAprobar.onclick = function() {
                    aprobarTurno(index, tipoTurno);
                };
                acciones.appendChild(botonAprobar);
            }
        }
    });
}

function aprobarTurno(index, tipoTurno) {
    let turnos = JSON.parse(localStorage.getItem(tipoTurno)) || [];
    let turno = turnos.splice(index, 1)[0];

    let turnosAprobados = JSON.parse(localStorage.getItem('turno')) || [];
    turnosAprobados.push(turno);

    localStorage.setItem(tipoTurno, JSON.stringify(turnos));
    localStorage.setItem('turno', JSON.stringify(turnosAprobados));

    cargarTurnos();
}

function guardarHistoriaClinica() {
    const historiaClinica = document.getElementById('historiaClinicaTextArea').value;
    console.log('Historia Clínica Guardada:', historiaClinica);
    const historiaClinicaModal = new bootstrap.Modal(document.getElementById('historiaClinicaModal'));
    historiaClinicaModal.hide();
}


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
