


// Función para mostrar médicos según el filtro de búsqueda
function mostrarMedicos(filtro) {
    let medicoGuardado = JSON.parse(localStorage.getItem('medico'));

    // Filtrar por nombre o especialidad
    let resultados = medicoGuardado.filter(medico => {
        return medico.especialidad.toLowerCase().includes(filtro.toLowerCase()) ||
               medico.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
               medico.apellido.toLowerCase().includes(filtro.toLowerCase());
    });

    let medicoInfoDiv = document.getElementById('medicoInfo');
    medicoInfoDiv.innerHTML = '<h2>Listado de Especialistas:</h2>';
    resultados.forEach(medico => {
        let medicoDiv = document.createElement('div'); // Crear un nuevo div
    
        // Agregar una clase al div creado
        medicoDiv.classList.add('bloqMedico');
    
        // Agregar el contenido al div creado
        medicoDiv.innerHTML = `
            <p>Nombre: ${medico.nombre}</p>
            <p>Apellido: ${medico.apellido}</p>
            <p>DNI: ${medico.dni}</p>
            <p>Email: ${medico.email}</p>
            <p>Matrícula: ${medico.matricula}</p>
            <p>Especialidad: ${medico.especialidad}</p>
            <hr>
        `;
    
        // Agregar el div creado al contenedor principal
        medicoInfoDiv.appendChild(medicoDiv);
    });

    
}

// Evento de escucha para el input de búsqueda
document.getElementById('searchInput').addEventListener('input', function(event) {
    mostrarMedicos(event.target.value);
});

// Mostrar todos los médicos al cargar la página
mostrarMedicos('');
