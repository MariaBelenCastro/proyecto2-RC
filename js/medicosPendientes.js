let pacientePendiente = []; // Variable global para almacenar pacientes pendientes

function loadPacientesPendientes() {
  const storedPacientesPendientes = JSON.parse(localStorage.getItem('medicoPendiente')) || [];
  pacientePendiente = storedPacientesPendientes; // Asignar los pacientes pendientes almacenados a la variable
  displayPatients(); // Mostrar los pacientes pendientes en la interfaz
}

function displayPatients() {
  const dataList = document.getElementById('boxContentmedicoPendiente');
  dataList.innerHTML = '';

  pacientePendiente.forEach((patient, index) => {
    const li = document.createElement('li');
    li.textContent = `${patient.nombre} ${patient.apellido}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar a paciente';
    addButton.onclick = () => addToPatients(patient, index);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar de pendiente';
    removeButton.onclick = () => removeFromPending(index);

    li.appendChild(addButton);
    li.appendChild(removeButton);
    dataList.appendChild(li);
  });
}

function addToPatients(patient, index) {
  const medico = JSON.parse(localStorage.getItem('medico')) || [];
  medico.push(patient);
  localStorage.setItem('medico', JSON.stringify(medico)); // Guardar en la llave 'medico' en lugar de 'medicoPendiente'

  pacientePendiente.splice(index, 1);
  localStorage.setItem('medicoPendiente', JSON.stringify(pacientePendiente)); // Actualizar 'medicoPendiente' en localStorage
  displayPatients();
}


function removeFromPending(index) {
  pacientePendiente.splice(index, 1);
  displayPatients();
}

window.onload = loadPacientesPendientes; // Cargar los pacientes pendientes al cargar la página
