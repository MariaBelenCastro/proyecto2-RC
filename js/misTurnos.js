const paciente = JSON.parse(localStorage.getItem("userLogged"));

window.addEventListener("load", function() {
  cargarMisTurnos();
});

const modificarTurnoEvent = (event) =>{
    event.preventDefault();
    const paciente = JSON.parse(localStorage.getItem("userLogged")) || [];
    const dniMedico = document.getElementById("medicoTurno").value;
    const fecha = document.getElementById("fechaTurno").value;
    const horario = document.getElementById("horarioTurno").value;
    const motivo = document.getElementById("motivoTurno").value;
    modificarTurno(paciente.dni, dniMedico, motivo, fecha, horario);
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
  function cargarMisTurnos() {
    const divTurno = document.querySelector(".turno");
    const turnos = obtenerTurnos();
    // Recorremos el array de turnos y buscamos los que coincidan con el dni del paciente
    for (let turno of turnos) {
      // Si el dni del turno coincide con el dni del paciente
      if (turno.dniPaciente == paciente.dni) {
        // Creamos un elemento p para mostrar los datos del turno
        var p = document.createElement("p");
        // Le asignamos el contenido con el id, la fecha y el horario del turno
        p.textContent = `Turno ${turno.idTurno}: ${turno.fechaTurno} - ${turno.horarioTurno}`;
        // Añadimos el elemento p al div
        divTurno.appendChild(p);
      }
    }
  }

  // Funciones médicos
  function obtenerMedicos(){
    const medicos = JSON.parse(localStorage.getItem("medico")) || [];
    return medicos;
  }

//AGREGAR LLOS BOTONES A LA TABLA
  turnos.forEach(element => {
    tabla.innerHTML += `
    <tr>
        <th scope="row">${element.idTurno}</th>
        <td>${element.fechaTurno}</td>
        <td>${element.horarioTurno}</td>
        <td>${element.dniMedico}</td>  
        <td> <button class="btn btn-danger" onclick="(eliminarTurno${element.idTurno})">Cancelar</button> </td>    
    </tr>
    `; //me permite los saltos de linea
    //aqui el $ seguido de {} con "codigo" dentro quiero hacer que me diga que elemento con el codigo estoy borrando
    
});

