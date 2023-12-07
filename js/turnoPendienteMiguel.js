
let medicos = JSON.parse(localStorage.getItem('medico'));
// Función para cargar médicos en el select
function cargarMedicos() {
    let medicoSelect = document.getElementById('medicoSelect');

    medicos.forEach((medico, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.text = `${medico.especialidad} ${medico.nombre} ${medico.apellido}`;
        medicoSelect.appendChild(option);
    });

    medicoSelect.addEventListener('change', actualizarSelects);
}

// Función para actualizar los select de días y horarios según el médico seleccionado
function actualizarSelects() {
    let medicoSelect = document.getElementById('medicoSelect');
    let selectedMedicoIndex = medicoSelect.value;
    let selectedMedico = medicos[selectedMedicoIndex];

    let diaSelect = document.getElementById('diaSelect');
    let horarioSelect = document.getElementById('horarioSelect');

    // Limpiar selectores previos
    diaSelect.innerHTML = '';
    horarioSelect.innerHTML = '';

    // Llenar el select de días
    selectedMedico.dia.forEach(dia => {
        let option = document.createElement('option');
        option.text = dia;
        diaSelect.appendChild(option);
    });

    // Llenar el select de horarios
    selectedMedico.horario.forEach(horario => {
        let option = document.createElement('option');
        option.text = horario;
        horarioSelect.appendChild(option);
    });
}

// Al cargar la página, cargar los médicos en el select
window.onload = cargarMedicos;

function buscarPaciente() {
    
        let pacientes = JSON.parse(localStorage.getItem('paciente'));
        let dniInput = document.getElementById('dniInput').value;
        let nombrePacienteInput = document.getElementById('nombrePaciente');
        let emailPacienteInput = document.getElementById('emailPaciente');
    
        if (pacientes && Array.isArray(pacientes)) {
            dniInput = dniInput.toString();
    
            let pacienteEncontrado = pacientes.find(paciente => paciente.dni === dniInput);
    
            if (pacienteEncontrado) {
                nombrePacienteInput.value = `${pacienteEncontrado.nombre} ${pacienteEncontrado.apellido}`;
                emailPacienteInput.value = pacienteEncontrado.email; // Mostrar el email del paciente
            } else {
                nombrePacienteInput.value = '';
                emailPacienteInput.value = '';
                alert('No se encontró ningún paciente con ese DNI.');
            }
        } else {
            console.log('No se encontraron datos de pacientes en el Local Storage o los datos no son válidos.');
        }
    }

    function enviarConsulta() {
        let pacientes = JSON.parse(localStorage.getItem('paciente'));
        let medicos = JSON.parse(localStorage.getItem('medico'));
    
        let dniInput = document.getElementById('dniInput').value;
        let medicoSelect = document.getElementById('medicoSelect');
        let diaSelect = document.getElementById('diaSelect');
        let horarioSelect = document.getElementById('horarioSelect');
    
        if (pacientes && medicos && Array.isArray(pacientes) && Array.isArray(medicos)) {
            dniInput = dniInput.toString();
    
            let pacienteEncontrado = pacientes.find(paciente => paciente.dni === dniInput);
            let selectedMedicoIndex = medicoSelect.value;
            let selectedMedico = medicos[selectedMedicoIndex];
    
            if (pacienteEncontrado) {
                let nuevoTurno = {
                    paciente: {
                        nombre: pacienteEncontrado.nombre,
                        apellido: pacienteEncontrado.apellido,
                        email: pacienteEncontrado.email // Incluir email del paciente si es necesario
                    },
                    especialista: {
                        nombre: selectedMedico.nombre,
                        apellido: selectedMedico.apellido,
                        especialidad: selectedMedico.especialidad
                    },
                    dia: diaSelect.value,
                    horario: horarioSelect.value,
                    consulta: selectedMedico.especialidad // Consulta igual a la especialidad del medico
                };
    
                let turnoPendiente= JSON.parse(localStorage.getItem('turnoPendiente')) || [];
                turnoPendiente.push(nuevoTurno);
    
                // Guardar todos los turnos pendientes en el localStorage
                localStorage.setItem('turnoPendiente', JSON.stringify(turnoPendiente));
                alert('Consulta enviada correctamente.');
            } else {
                alert('No se encontró ningún paciente con ese DNI.');
            }
        } else {
            console.log('No se encontraron datos válidos en el Local Storage.');
        }
    }