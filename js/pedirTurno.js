const form = document.querySelector("form");

// Evento para cargar datos al formulario
window.addEventListener("load", function() {
  cargarMedicos();
  cargarEspecialidades();
});

const eventNuevoTurno = (event) =>{
    event.preventDefault();
    const paciente = JSON.parse(localStorage.getItem("userLogged")) || [];
    const dniMedico = document.getElementById("medicoTurno").value;
    const fecha = document.getElementById("fechaTurno").value;
    const horario = document.getElementById("horarioTurno").value;
    const motivo = document.getElementById("motivoTurno").value;
    nuevoTurno(paciente.dni, dniMedico, motivo, fecha, horario);
}

// Función para generar un id autoincremental
function generarId() {
    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    const lastId = turnos.length > 0 ? turnos[turnos.length - 1].idTurno : 0;
    return lastId + 1;
  }
  
  // Función para agregar turno
  function nuevoTurno(dniPaciente, dniMedico, motivo, fechaTurno, horarioTurno) {
    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    const nuevoTurno = {
      idTurno: generarId(),
      dniPaciente: dniPaciente,
      dniMedico: dniMedico,
      motivo: motivo,
      fechaTurno: fechaTurno,
      horarioTurno: horarioTurno
    };
    turnos.push(nuevoTurno);
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }
  
  // Función para actualizar turno
  function modificarTurno(idTurno, dniPaciente, dniMedico, motivo, fechaTurno, horarioTurno) {
    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    const index = turnos.findIndex((c) => c.idTurno === idTurno);
    if (index !== -1) {
      turnos[index].dniPaciente = dniPaciente;
      turnos[index].dniMedico = dniMedico;
      turnos[index].motivo = motivo;
      turnos[index].fechaTurno = fechaTurno;
      turnos[index].horarioTurno = horarioTurno;
      localStorage.setItem("turnos", JSON.stringify(turnos));
    }
  }
  
  // Función para eliminar un turno
  function eliminarTurno(idTurno) {
    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    const index = turnos.findIndex((c) => c.idTurno === idTurno);
    if (index !== -1) {
      turnos.splice(index, 1);
      localStorage.setItem("turnos", JSON.stringify(turnos));
    }
  }
  
  // Función para llamar todos los turnos
  function obtenerTurnos() {
    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    return turnos;
  }

  // Funciones médicos
  function obtenerMedicos(){
    const medicos = JSON.parse(localStorage.getItem("medico")) || [];
    return medicos;
  }
  function cargarMedicos(){
    const selectMedico = document.getElementById("medicoTurno");
    const medicos = obtenerMedicos();
    
    for (const medico of medicos) {
        const option = document.createElement("option");
        // Le asignamos el valor y el texto de la especialidad
        option.value = medico.dni;
        option.text = medico.nombre + " " +medico.apellido;
        // Añadimos el elemento option al select
        selectMedico.appendChild(option);
      }
  }
  function obtenerEspecialidades() {
    // Obtiene los medicos de la funcion obtenerMedicos
    const medicos = obtenerMedicos();
    const especialidades = [];
    // Valida que no se repitan especialidades
    medicos.forEach(function (medico) {
      if (!especialidades.includes(medico.especialidad)) {
        especialidades.push(medico.especialidad);
      }
    });
    return especialidades;
  }
  function cargarEspecialidades() {
    const selectEspecialidad = document.getElementById("especialidadTurno");
    const especialidades = obtenerEspecialidades();
    // Recorremos el vector de especialidades y creamos un elemento option por cada una
    for (const especialidad of especialidades) {
      const option = document.createElement("option");
      // Le asignamos el valor y el texto de la especialidad
      option.value = especialidad;
      option.text = especialidad;
      // Añadimos el elemento option al select
      selectEspecialidad.appendChild(option);
    }
  }
  const horarios = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00"
  ];

  function cargarHorarios() {
    const seleccionFechaTurno = document.getElementById("fechaTurno").value;
    const turnos = obtenerTurnos();
    console.log("cargarHorarios()")
    const horariosDisponibles = [...horarios];
    const horariosOcupados = [];
    for (const turno of turnos) {
      if (turno.fechaTurno == seleccionFechaTurno) {
        // Añadimos el horario del turno al array de horarios ocupados
        horariosOcupados.push(turno.horarioTurno);
      }
    }
    // Recorremos el array de horarios ocupados
    for (const horario of horariosOcupados) {
      // Buscamos el índice del horario ocupado en el array de horarios disponibles
      const index = horariosDisponibles.indexOf(horario);
      // Si el índice es diferente de -1, significa que el horario está disponible
      if (index !== -1) {
        // Eliminamos el horario del array de horarios disponibles, pasando el índice y el número 1 como argumentos
        horariosDisponibles.splice(index, 1);
      }
    }
    const selectHorario = document.getElementById("horarioTurno");
    // Vaciamos el select antes de añadir las nuevas opciones
    while (selectHorario.length > 0) {
      selectHorario.remove(0);
    }
    horariosDisponibles.forEach(function (horario) {
      const option = document.createElement("option");
      option.value = horario;
      option.text = horario;
      selectHorario.add(option);
    });
  }
  
  