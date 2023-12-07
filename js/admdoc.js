// Obtener el div donde se mostrarán los valores de médicos
const boxContentMedico = document.querySelector('.boxContentMedico');

// Obtener los valores del localStorage bajo la clave "medico"
const valoresMedico = localStorage.getItem('medico');

// Verificar si hay valores en el localStorage y mostrarlos en el div de médicos
if (valoresMedico) { 
  const medicos = JSON.parse(valoresMedico);
  let fragmento;
  const mostrarMedicos = () => {
    fragmento = document.createDocumentFragment();

    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div');
    h1Div.textContent = 'Listado de médicos';
    fragmento.appendChild(h1Div);

    medicos.forEach((medico, index) => {
      const medicoDiv = document.createElement('div');
      medicoDiv.classList.add('medicoDivClass');

      // Mostrar datos del médico
      const datosMedicoDiv = document.createElement('div');
      datosMedicoDiv.textContent = `Nombre: ${medico.nombre}, Apellido: ${medico.apellido}, Email: ${medico.email}, DNI: ${medico.dni}, Especialidad: ${medico.especialidad}`;
      medicoDiv.appendChild(datosMedicoDiv);

      // Botón de Eliminar
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', () => {
        // Eliminar médico del array y actualizar localStorage
        medicos.splice(index, 1);
        localStorage.setItem('medico', JSON.stringify(medicos));
        mostrarMedicos(); // Volver a mostrar la lista actualizada
      });
      medicoDiv.appendChild(btnEliminar);

      // Botón de Modificar
      const btnModificar = document.createElement('button');
    btnModificar.textContent = 'Modificar';
    btnModificar.addEventListener('click', () => {
      const nuevoNombre = prompt('Ingrese el nuevo nombre:');
      const nuevoApellido = prompt('Ingrese el nuevo apellido:');
      const nuevaEspecialidad = prompt('Ingrese la nueva especialidad:');
      const nuevoDNI = prompt('Ingrese el nuevo DNI:');
      
        // Verificar si se ingresaron valores
        if (nuevoNombre && nuevoApellido && nuevaEspecialidad && nuevoDNI) {
          // Actualizar los datos del médico con los nuevos valores
          medico.nombre = nuevoNombre;
          medico.apellido = nuevoApellido;
          medico.especialidad = nuevaEspecialidad;
          medico.dni = nuevoDNI;
          // Actualizar localStorage
          localStorage.setItem('medico', JSON.stringify(medicos));
          mostrarMedicos();
        } else {
          alert('Por favor, complete todos los campos.');
        }
      });
  
      medicoDiv.appendChild(btnModificar);
      fragmento.appendChild(medicoDiv);
    });
    boxContentMedico.innerHTML = ''; // Limpiar antes de agregar
    boxContentMedico.appendChild(fragmento); // Agregar al contenedor
  };

  // Mostrar los médicos al cargar la página
  mostrarMedicos();
 
} else {
  boxContentMedico.textContent = 'No hay datos de médicos almacenados en localStorage';
}


//INICIO DE MÉDICOS PENDIENTES//
// Obtener el div donde se mostrarán los valores de médicos pendientes
const boxContentMedicoPendiente = document.querySelector('.boxContentmedicoPendiente');

// Obtener los valores del localStorage bajo la clave "medicoPendiente"
const valoresMedicoPendiente = localStorage.getItem('medicoPendiente');

if (valoresMedicoPendiente) {
  const medicosPendientes = JSON.parse(valoresMedicoPendiente);

  const mostrarMedicosPendientes = () => {
    const fragmento = document.createDocumentFragment();
    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div');
    h1Div.textContent = 'Médicos pendientes';
    fragmento.appendChild(h1Div);
  
    medicosPendientes.forEach((medicoPendiente, index) => {
      const medicoPendienteDiv = document.createElement('div');
      medicoPendienteDiv.classList.add('medicoPendiente');
  
      const datosMedicoPendienteDiv = document.createElement('div');
      datosMedicoPendienteDiv.textContent = `Nombre: ${medicoPendiente.nombre}, Apellido: ${medicoPendiente.apellido}, Email: ${medicoPendiente.email}, DNI: ${medicoPendiente.dni}`;
      medicoPendienteDiv.appendChild(datosMedicoPendienteDiv);
  
      // Botón de Eliminar médico pendiente
      const btnEliminarPendiente = document.createElement('button');
      btnEliminarPendiente.textContent = 'Eliminar Pendiente';
      btnEliminarPendiente.addEventListener('click', () => {
        // Eliminar médico pendiente del array y actualizar localStorage
        medicosPendientes.splice(index, 1);
        localStorage.setItem('medicoPendiente', JSON.stringify(medicosPendientes));
        mostrarMedicosPendientes(); // Volver a mostrar la lista actualizada
      });
      medicoPendienteDiv.appendChild(btnEliminarPendiente);
  
      // Botón de Aceptar médico pendiente
      
      const btnAceptarPendiente = document.createElement('button');
      btnAceptarPendiente.textContent = 'Aceptar Pendiente';
      btnAceptarPendiente.addEventListener('click', () => {
        const nuevoMedico = { ...medicoPendiente, key: Date.now() }; // Nueva clave única
        medicos.push(nuevoMedico); // Agregar médico pendiente a la lista de médicos
  
        // Eliminar médico pendiente del array de médicos pendientes y actualizar localStorage
        medicosPendientes.splice(index, 1);
        localStorage.setItem('medicoPendiente', JSON.stringify(medicosPendientes));
  
        localStorage.setItem('medico', JSON.stringify(medicos)); // Actualizar lista de médicos
  
        mostrarMedicos(); // Mostrar médicos actualizados
        mostrarMedicosPendientes(); // Mostrar médicos pendientes actualizados
      });
      medicoPendienteDiv.appendChild(btnAceptarPendiente);
  
      fragmento.appendChild(medicoPendienteDiv);
    });
  
    boxContentMedicoPendiente.innerHTML = '';
    boxContentMedicoPendiente.appendChild(fragmento);
  };

  // Mostrar los médicos pendientes al cargar la página
  mostrarMedicosPendientes();
}
