// Obtener el div donde se mostrarán los valores de médicos
const boxContentMedico = document.querySelector('.boxContentMedico');

// Obtener los valores del localStorage bajo la clave "medico"
const valoresMedico = localStorage.getItem('medico');

// Verificar si hay valores en el localStorage y mostrarlos en el div de médicos
if (valoresMedico) {
  const medicos = JSON.parse(valoresMedico);

  const mostrarMedicos = () => {
    // Crear un fragmento para concatenar los valores deseados
    const fragmento = document.createDocumentFragment();
    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div');
    h1Div.textContent = 'Listado de médicos';
    fragmento.appendChild(h1Div);

    medicos.forEach((medico, index) => {
      const medicoDiv = document.createElement('div');
      medicoDiv.classList.add('medicoDivClass'); // Agregar la clase 'medico-item'

      // Mostrar datos del médico
      const datosMedicoDiv = document.createElement('div');
      datosMedicoDiv.textContent = `Nombre: ${medico.nombre}, Apellido: ${medico.apellido}, Email: ${medico.email}, DNI: ${medico.dni}, Especialidad: ${medico.especialidad}`;
      medicoDiv.appendChild(datosMedicoDiv);

      fragmento.appendChild(medicoDiv);
    });

    // Limpiar el contenido actual del div y agregar el fragmento con los valores
    boxContentMedico.innerHTML = '';
    boxContentMedico.appendChild(fragmento);
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
    // Crear un fragmento para concatenar los valores deseados
    const fragmento = document.createDocumentFragment();
    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div');
    h1Div.textContent = 'médicos pendientes';
    fragmento.appendChild(h1Div);

    medicosPendientes.forEach((medicoPendiente, index) => {
      const medicoPendienteDiv = document.createElement('div');
      medicoPendienteDiv.classList.add('medicoPendiente'); // Agregar la clase 'medico-pendiente-item'

      // Mostrar datos del médico pendiente
      const datosMedicoPendienteDiv = document.createElement('div');
      datosMedicoPendienteDiv.textContent = `Nombre: ${medicoPendiente.nombre}, Apellido: ${medicoPendiente.apellido}, Email: ${medicoPendiente.email}, DNI: ${medicoPendiente.dni}`;
      medicoPendienteDiv.appendChild(datosMedicoPendienteDiv);

      fragmento.appendChild(medicoPendienteDiv);
    });

    // Limpiar el contenido actual del div y agregar el fragmento con los valores
    boxContentMedicoPendiente.innerHTML = '';
    boxContentMedicoPendiente.appendChild(fragmento);
  };

  // Mostrar los médicos pendientes al cargar la página
  mostrarMedicosPendientes();
}


