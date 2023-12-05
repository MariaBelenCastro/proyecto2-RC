


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
        <div class="card" style="width: 18rem;">
        <img src="/assets/imgcard.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Dr. ${medico.nombre} ${medico.apellido}</h5>
          <p class="card-text">Especialidad: ${medico.especialidad}</p>
          <a href="" class="btn btn-primary">Solicitar Turno</a>
        </div>
      </div>
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
