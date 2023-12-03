let pacientePendiente = []; // Variable global para almacenar pacientes pendientes

function loadPacientesPendientes() {
  const storedPacientesPendientes = JSON.parse(localStorage.getItem('medicoPendiente')) || [];
  pacientePendiente = storedPacientesPendientes; // Asignar los pacientes pendientes almacenados a la variable
  displayPatients(); // Mostrar los pacientes pendientes en la interfaz
}

function displayPatients() {
  const dataList = document.getElementById('data-list');
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
  const paciente = JSON.parse(localStorage.getItem('medico')) || [];
  paciente.push(patient);
  localStorage.setItem('medico', JSON.stringify(paciente));
  pacientePendiente.splice(index, 1);
  displayPatients();
}

function removeFromPending(index) {
  pacientePendiente.splice(index, 1);
  displayPatients();
}

window.onload = loadPacientesPendientes; // Cargar los pacientes pendientes al cargar la página
