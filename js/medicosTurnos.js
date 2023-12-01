// Supongamos que esta función simula la aprobación de un turno por parte del médico
function aprobarTurno() {
    // Turno hardcodeado para propósitos de prueba
    let turnoAprobado = {
        paciente: "Rodrigo",
        especialidad: "Cardiología",
        motivo: "Consulta",
        hora: "22:30",
    };

    // Obtener los turnos aprobados del localStorage
    const turnosAprobados = JSON.parse(localStorage.getItem('turnoAprobado')) || [];

    // Agregar el nuevo turno aprobado
    turnosAprobados.push(turnoAprobado);

    // Almacenar los turnos aprobados actualizados en el localStorage
    localStorage.setItem('turnoAprobado', JSON.stringify(turnosAprobados));

    // Actualizar la visualización en el panel del médico
    mostrarTurnosMedico();
}

// Función para obtener y mostrar los turnos asignados al médico desde el localStorage
function mostrarTurnosMedico() {
    // Obtener los turnos aprobados del localStorage
    const turnosAprobados = JSON.parse(localStorage.getItem('turnoAprobado')) || [];

    // Limpiar la lista de turnos antes de agregar nuevos elementos
    const turnosList = document.getElementById('turnosList');
    turnosList.innerHTML = '';

    // Mostrar cada turno aprobado en la lista
    turnosAprobados.forEach((turno) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Paciente: ${turno.paciente}, Especialidad: ${turno.especialidad}, Motivo: ${turno.motivo}, Hora: ${turno.hora}`;
        turnosList.appendChild(listItem);
    });
}

// Llamar a la función al cargar la página para mostrar los turnos actuales
document.addEventListener('DOMContentLoaded', mostrarTurnosMedico);
document.getElementById('aprobarTurnoBtn').addEventListener('click', aprobarTurno);