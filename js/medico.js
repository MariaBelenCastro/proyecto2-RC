function mostrarMedicos(filtro) {
  let medicoGuardado = JSON.parse(localStorage.getItem('medico'));

  // Filtrar por nombre o especialidad
  let resultados = medicoGuardado.filter(medico => {
      return medico.especialidad.toLowerCase().includes(filtro.toLowerCase()) ||
             medico.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
             medico.apellido.toLowerCase().includes(filtro.toLowerCase());
  });

  let medicoInfoDiv = document.getElementById('medicoInfo');

  // Limpiar el contenido del contenedor antes de agregar nuevas tarjetas
  medicoInfoDiv.innerHTML = '';

  resultados.forEach(medico => {
      let medicoDiv = document.createElement('div'); // Crear un nuevo div
  
      // Agregar una clase al div creado
      medicoDiv.classList.add('bloqMedico');
  
      // Agregar el contenido al div creado
      medicoDiv.innerHTML = `
      <div class="card">
        <img src="/assets/imgcard.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Dr. ${medico.nombre} ${medico.apellido}</h5>
          <p class="card-text">${medico.especialidad}</p>
          <a href="/pages/turnoPendienteMiguel.html" style="text-align: center;" class="btn btn-primary">Solicitar Turno</a>
        </div>
      </div>
      `;
  
      // Agregar el div creado al contenedor principal
      medicoInfoDiv.appendChild(medicoDiv);
  });
}

// Resto del código sigue igual...


// Evento de escucha para el input de búsqueda
document.getElementById('searchInput').addEventListener('input', function(event) {
    mostrarMedicos(event.target.value);
});

// Mostrar todos los médicos al cargar la página
mostrarMedicos('');
