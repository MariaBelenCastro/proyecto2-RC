// Obtener el div donde se mostrarán los valores
const boxContent = document.querySelector('.boxContentPaciente');

// Obtener los valores del localStorage bajo la clave "paciente"
const valoresPaciente = localStorage.getItem('paciente');

// Verificar si hay valores en el localStorage y mostrarlos en el div
if (valoresPaciente) {
  const pacientes = JSON.parse(valoresPaciente);

  // Función para eliminar un paciente por su índice
  const eliminarPaciente = (index) => {
    pacientes.splice(index, 1);
    localStorage.setItem('paciente', JSON.stringify(pacientes));
    mostrarPacientes();
  };

  // Función para modificar los valores de un paciente por su índice
  const modificarPaciente = (index) => {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevoApellido = prompt('Ingrese el nuevo apellido:');
    const nuevoEmail = prompt('Ingrese el nuevo email:');
    const nuevoDni = prompt('Ingrese el nuevo DNI:');
  
    // Verificar si se ingresaron valores y actualizar los datos del paciente
    if (nuevoNombre && nuevoApellido && nuevoEmail && nuevoDni) {
      pacientes[index] = {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        email: nuevoEmail,
        dni: nuevoDni
      };
      localStorage.setItem('paciente', JSON.stringify(pacientes));
      mostrarPacientes();
    } else {
      alert('Por favor ingrese valores válidos para actualizar al paciente.');
    }
  };

  

  // Función para mostrar los pacientes en el div
  const mostrarPacientes = () => {
    // Crear un fragmento para concatenar los valores deseados
    const fragmento = document.createDocumentFragment();
    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div')
    h1Div.innerHTML ='Listado de pacientes'
    fragmento.appendChild(h1Div);
    pacientes.forEach((paciente, index) => {
      const pacienteDiv = document.createElement('div');
      pacienteDiv.classList.add('pacienteDivClass'); // Agregar la clase 'paciente-item'
  
      // Mostrar datos del paciente
      const datosPacienteDiv = document.createElement('div');
      datosPacienteDiv.textContent = `Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Email: ${paciente.email}, DNI: ${paciente.dni}`;
      pacienteDiv.appendChild(datosPacienteDiv);
  
      // Sección de botones
      const botonesDiv = document.createElement('div');
  
      // Botón para eliminar el paciente
      const eliminarBtn = document.createElement('button');
      eliminarBtn.textContent = 'Eliminar';
      eliminarBtn.addEventListener('click', () => eliminarPaciente(index));
      botonesDiv.appendChild(eliminarBtn);
  
      // Botón para modificar el paciente
      const modificarBtn = document.createElement('button');
      modificarBtn.textContent = 'Modificar';
      modificarBtn.addEventListener('click', () => modificarPaciente(index));
      botonesDiv.appendChild(modificarBtn);
  
      pacienteDiv.appendChild(botonesDiv);
  
      fragmento.appendChild(pacienteDiv);
    });
  
    // Limpiar el contenido actual del div y agregar el fragmento con los valores
    boxContent.innerHTML = '';
    boxContent.appendChild(fragmento);
  };

  // Mostrar los pacientes al cargar la página
  mostrarPacientes();
} else {
  boxContent.textContent = 'No hay datos de pacientes almacenados en localStorage';
}

//INICIO DE PACIENTE PENDIENTES//
// Obtener el div donde se mostrarán los valores de pacientes pendientes
const boxContentPendiente = document.querySelector('.boxContentPacientePendiente');

// Función para mostrar los pacientes pendientes en la sección correspondiente
const valoresPacientePendiente = localStorage.getItem('pacientePendiente');

  if (valoresPacientePendiente) {
    const pacientesPendientes = JSON.parse(valoresPacientePendiente);

    // Crear un fragmento para concatenar los valores deseados
    const fragmento = document.createDocumentFragment();
    const h1Div = document.createElement('h1');
    h1Div.classList.add('h1Div');
    h1Div.innerHTML = 'Listado de pacientes pendientes';
    fragmento.appendChild(h1Div);

    pacientesPendientes.forEach((pacientePendiente, index) => {
      const pacientePendienteDiv = document.createElement('div');
      pacientePendienteDiv.classList.add('pacientePendiente'); // Agregar la clase 'paciente-pendiente-item'

      // Mostrar datos del paciente pendiente
      const datosPacientePendienteDiv = document.createElement('div');
      datosPacientePendienteDiv.textContent = `Nombre: ${pacientePendiente.nombre}, Apellido: ${pacientePendiente.apellido}, Email: ${pacientePendiente.email}, DNI: ${pacientePendiente.dni}`;
      pacientePendienteDiv.appendChild(datosPacientePendienteDiv);

      // Sección de botones para pacientes pendientes
      const botonesDiv = document.createElement('div');

      // Botón para eliminar el paciente pendiente
      const eliminarBtn = document.createElement('button');
      eliminarBtn.textContent = 'Eliminar';
      eliminarBtn.addEventListener('click', () => eliminarPacientePendiente(index));
      botonesDiv.appendChild(eliminarBtn);

      // Botón para modificar el paciente pendiente
      const modificarBtn = document.createElement('button');
      modificarBtn.textContent = 'Modificar';
      modificarBtn.addEventListener('click', () => modificarPacientePendiente(index));
      botonesDiv.appendChild(modificarBtn);

      pacientePendienteDiv.appendChild(botonesDiv);

      fragmento.appendChild(pacientePendienteDiv);
    });

    // Limpiar el contenido actual del div y agregar el fragmento con los valores
    boxContentPendiente.innerHTML = '';
    boxContentPendiente.appendChild(fragmento);
  } else {
    boxContentPendiente.textContent = 'No hay datos de pacientes pendientes almacenados en localStorage';
  }





// Función para eliminar un paciente pendiente por su índice
const eliminarPacientePendiente = (index) => {
  const valoresPacientePendiente = localStorage.getItem('pacientePendiente');
  if (valoresPacientePendiente) {
    const pacientesPendientes = JSON.parse(valoresPacientePendiente);
    pacientesPendientes.splice(index, 1);
    localStorage.setItem('pacientePendiente', JSON.stringify(pacientesPendientes));
    mostrarPacientesPendientes();
  }
};


// Función para modificar los valores de un paciente pendiente por su índice
const modificarPacientePendiente = (index) => {
  const valoresPacientePendiente = localStorage.getItem('pacientePendiente');
  if (valoresPacientePendiente) {
    const pacientesPendientes = JSON.parse(valoresPacientePendiente);
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevoApellido = prompt('Ingrese el nuevo apellido:');
    const nuevoEmail = prompt('Ingrese el nuevo email:');
    const nuevoDni = prompt('Ingrese el nuevo DNI:');

    if (nuevoNombre && nuevoApellido && nuevoEmail && nuevoDni) {
      pacientesPendientes[index] = {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        email: nuevoEmail,
        dni: nuevoDni
      };
      localStorage.setItem('pacientePendiente', JSON.stringify(pacientesPendientes));
      mostrarPacientesPendientes();
    } else {
      alert('Por favor ingrese valores válidos para actualizar al paciente pendiente.');
    }
  }
};


// Función para mover un paciente pendiente a la lista de pacientes
const moverPaciente = (index) => {
    const valoresPacientePendiente = localStorage.getItem('pacientePendiente');
    const valoresPaciente = localStorage.getItem('paciente');
  
    if (valoresPacientePendiente && valoresPaciente) {
      const pacientesPendientes = JSON.parse(valoresPacientePendiente);
      const pacientes = JSON.parse(valoresPaciente);
  
      const pacienteAMover = pacientesPendientes[index];
  
      pacientes.push(pacienteAMover);
      pacientesPendientes.splice(index, 1);
  
      localStorage.setItem('pacientePendiente', JSON.stringify(pacientesPendientes));
      localStorage.setItem('paciente', JSON.stringify(pacientes));
  
      mostrarPacientes();
      mostrarPacientesPendientes();
    }
  };
  
  // Función para crear un botón dinámico de mover paciente
  const crearBotonMover = (index) => {
    const botonMover = document.createElement('button');
    botonMover.textContent = 'Aceptar';
    botonMover.addEventListener('click', () => moverPaciente(index));
    return botonMover;
  };
  
  // Función para mostrar los pacientes pendientes en la sección correspondiente
  const mostrarPacientesPendientes = () => {
    const boxContentPendiente = document.querySelector('.boxContentPacientePendiente');
  
    const valoresPacientePendiente = localStorage.getItem('pacientePendiente');
  
    if (valoresPacientePendiente) {
      const pacientesPendientes = JSON.parse(valoresPacientePendiente);
  
      const fragmento = document.createDocumentFragment();
      const h1Div = document.createElement('h1');
      h1Div.classList.add('h1Div');
      h1Div.innerHTML = 'Listado de pacientes pendientes';
      fragmento.appendChild(h1Div);
  
      pacientesPendientes.forEach((pacientePendiente, index) => {
        const pacientePendienteDiv = document.createElement('div');
        pacientePendienteDiv.classList.add('pacientePendiente'); // Agregar la clase 'paciente-pendiente-item'
  
        const datosPacientePendienteDiv = document.createElement('div');
        datosPacientePendienteDiv.textContent = `Nombre: ${pacientePendiente.nombre}, Apellido: ${pacientePendiente.apellido}, Email: ${pacientePendiente.email}, DNI: ${pacientePendiente.dni}`;
        pacientePendienteDiv.appendChild(datosPacientePendienteDiv);
  
        const botonesDiv = document.createElement('div');
  
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => eliminarPacientePendiente(index));
        botonesDiv.appendChild(eliminarBtn);
  
        const modificarBtn = document.createElement('button');
        modificarBtn.textContent = 'Modificar';
        modificarBtn.addEventListener('click', () => modificarPacientePendiente(index));
        botonesDiv.appendChild(modificarBtn);
  
        const botonMover = crearBotonMover(index);
        botonesDiv.appendChild(botonMover);
  
        pacientePendienteDiv.appendChild(botonesDiv);
  
        fragmento.appendChild(pacientePendienteDiv);
      });
  
      boxContentPendiente.innerHTML = '';
      boxContentPendiente.appendChild(fragmento);
    } else {
      boxContentPendiente.textContent = 'No hay datos de pacientes pendientes almacenados en localStorage';
    }
  };
  
  // Mostrar los pacientes pendientes al cargar la página
  mostrarPacientesPendientes();
   