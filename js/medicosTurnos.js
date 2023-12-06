window.onload = cargarTurnos;
console.log("Se está ejecutando");

function obtenerMedicoLogueado() {
    // Lógica para obtener el médico logueado, puede ser desde localStorage, sessionStorage, u otro método.
    const medicoLogueado = JSON.parse(localStorage.getItem('medicoLogueado'));
    return medicoLogueado || null;
}

const medicoLogueado = obtenerMedicoLogueado();

function cargarTurnos() {
    cargarTabla('turnos-table', 'turnoPendiente');
    cargarTabla('turnos-aprobados-table', 'turno');
}

function cargarTabla(tablaId, tipoTurno) {
    let turnos = JSON.parse(localStorage.getItem(tipoTurno)) || [];
    let tabla = document.getElementById(tablaId).getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    
    let contador = 0;  // Inicializa el contador

    turnos.forEach((turno, index) => {
        // Verifica que haya un médico logueado antes de intentar acceder a su propiedad 'dni'
        if (medicoLogueado && turno.dniMedico === medicoLogueado.dni) {
            let fila = tabla.insertRow();
            
            // Columna del contador
            let celdaContador = fila.insertCell();
            celdaContador.innerText = ++contador;  // Incrementa y muestra el contador
            
            // Resto de las columnas
            fila.insertCell().innerText = turno.paciente;
            fila.insertCell().innerText = turno.horario;
            fila.insertCell().innerText = turno.consulta;
            fila.insertCell().innerText = turno.dia;

            // Columna de acciones
            let acciones = fila.insertCell();

            // Verifica si el turno ya fue aprobado
            if (tipoTurno === 'turno') {
                // Agrega un botón para abrir el modal de historia clínica
                let botonHistoriaClinica = document.createElement('button');
                botonHistoriaClinica.innerText = 'Historia Clínica';
                botonHistoriaClinica.className = 'btn btn-info';
                botonHistoriaClinica.setAttribute('data-bs-toggle', 'modal');
                botonHistoriaClinica.setAttribute('data-bs-target', '#historiaClinicaModal');
                botonHistoriaClinica.addEventListener('click', function() {
                    mostrarHistoriaClinicaModal(turno.paciente);  // Puedes pasar datos relevantes aquí
                });
                acciones.appendChild(botonHistoriaClinica);
            } else {
                // Agrega un botón para aprobar el turno
                let botonAprobar = document.createElement('button');
                botonAprobar.innerText = 'Aprobar';
                botonAprobar.className = 'btn btn-success';
                botonAprobar.addEventListener('click', function() {
                    aprobarTurno(index, tipoTurno);
                });
                acciones.appendChild(botonAprobar);
            }
        }
    });
}
 

// Función para mostrar el modal de historia clínica con la información del turno
function mostrarHistoriaClinicaModal(paciente) {
    // Código para mostrar el modal con la información del paciente
    console.log(`Mostrar historia clínica para ${paciente}`);
}

// Función para aprobar un turno
function aprobarTurno(index, tipoTurno) {
    // ... Código anterior ...

    // Agrega un botón para abrir el modal de historia clínica
    let botonHistoriaClinica = document.createElement('button');
    botonHistoriaClinica.innerText = 'Historia Clínica';
    botonHistoriaClinica.className = 'btn btn-info';
    botonHistoriaClinica.setAttribute('data-bs-toggle', 'modal');
    botonHistoriaClinica.setAttribute('data-bs-target', '#historiaClinicaModal');
    botonHistoriaClinica.onclick = function() {
        mostrarHistoriaClinicaModal();
    };
    acciones.appendChild(botonHistoriaClinica);
}

// function guardarHistoriaClinica() {
//     // Obtenemos el texto de la historia clínica
//     const historiaClinica = document.getElementById('historiaClinicaTextArea').value;

//     // Aquí puedes agregar la lógica para guardar la historia clínica, por ejemplo, en localStorage
//     // Ejemplo: localStorage.setItem('historiaClinica', historiaClinica);

//     // Cerrar el modal después de guardar
//     $('#historiaClinicaModal').modal('hide');
// }

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
