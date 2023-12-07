turno = [
    { 
        paciente: 'Jose Velazquez',
        especialista: 'Mendez',
        dniMedico: '41291322',
        horario: '12:30',
        email: 'pepe@olis.com',
        consulta: 'Pediatra',
        dia: 'miercoles',
        historiaClinica: {
            edad: 6,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Fiebre leve',
            tratamiento: 'Reposo y medicamentos para bajar la fiebre',
            notas: 'Se recomienda seguimiento en tres días. Monitorear temperatura regularmente.'
        }
    },
    {
        paciente: 'Ana Gonzalez',
        especialista: 'Mendez',
        dniMedico: '41291322',
        horario: '14:00',
        email: 'ana@gmail.com',
        consulta: 'Pediatra',
        dia: 'lunes',
        historiaClinica: {
            edad: 8,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Resfriado común',
            tratamiento: 'Reposo, líquidos y medicamentos para aliviar la congestión nasal',
            notas: 'Se recomienda seguimiento en una semana. Informar cualquier empeoramiento de los síntomas.'
        }
    },
    {
        paciente: 'Luis Lopez',
        especialista: 'Fernandez',
        dniMedico: '78901234',
        horario: '15:30',
        email: 'luis@gmail.com',
        consulta: 'Cardiologo',
        dia: 'miercoles',
        historiaClinica: {
            edad: 12,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Control cardiológico anual',
            tratamiento: 'Sin tratamiento actual, seguir monitoreo regular.',
            notas: 'Buen estado de salud general.'
        }
    },
    {
        paciente: 'Marta Aguirre',
        especialista: 'Fernandez',
        dniMedico: '78901234',
        horario: '10:45',
        email: 'marta@gmail.com',
        consulta: 'Cardiologo',
        dia: 'viernes',
        historiaClinica: {
            edad: 40,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Control cardiológico anual',
            tratamiento: 'Sin tratamiento actual, seguir monitoreo regular.',
            notas: 'Buen estado de salud general.'
        }
    },
    {
        paciente: 'Carlos Moras',
        especialista: 'Ramirez',
        horario: '11:15',
        email: 'carlos@gmail.com',
        consulta: 'Oncologo',
        dia: 'martes',
        historiaClinica: {
            edad: 55,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Seguimiento oncológico',
            tratamiento: 'Radioterapia programada',
            notas: 'El paciente muestra una buena respuesta al tratamiento.'
        }
    },
    {
        paciente: 'Laura Villagra',
        especialista: 'Mendez',
        dniMedico: '41291322',
        horario: '16:45',
        email: 'laura@gmail.com',
        consulta: 'Pediatra',
        dia: 'jueves',
        historiaClinica: {
            edad: 10,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Examen pediátrico de rutina',
            tratamiento: 'Sin tratamiento actual, seguir monitoreo regular.',
            notas: 'Buen estado de salud general.'
        }
    }
];

turnoPendiente = [
    { 
        paciente: 'Jose',
        especialista: 'Mendez',
        dniMedico: '41291322',
        horario: '12:30',
        email: 'pepe@olis',
        consulta: 'Pediatra',
        dia: 'Lunes',
        historiaClinica: {
            edad: 7,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Control pediátrico anual',
            tratamiento: 'Sin tratamiento actual, seguir monitoreo regular.',
            notas: 'Buen estado de salud general.'
        }
    },
    {
        paciente: 'Jospepee',
        especialista: 'Mendez Juan',
        dniMedico: '35642589',
        horario: '12:30',
        email: 'pepe@olis',
        consulta: 'Oncologo',
        dia: 'Lunes',
        historiaClinica: {
            edad: 45,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Seguimiento oncológico',
            tratamiento: 'Radioterapia programada',
            notas: 'El paciente muestra una buena respuesta al tratamiento.'
        }
    },
    {
        paciente: 'Maria',
        especialista: 'Mendez',
        dniMedico: '41291322',
        horario: '12:30',
        email: 'mariamendez@gmail.com',
        consulta: 'Kinesiologo',
        dia: 'Lunes',
        historiaClinica: {
            edad: 28,
            fechaConsulta: '2023-12-07',
            diagnostico: 'Rehabilitación física',
            tratamiento: 'Ejercicios y terapia física',
            notas: 'Se observa mejoría en la movilidad y fuerza muscular.'
        }
    }
];




medico = [
    { 
        nombre:'Juan Perez',
        apellido:'Mendez',
        dni: '41291322',
        email:'juanmendez@gmail.com',
        password:'Juanperez123',
        matricula:'124125',
        especialidad:'Pediatra',
        horario:['09:00am', '13:00pm', '16:00pm', '19:00pm'],
        dia:['Lunes','Miercoles','Viernes']
    },
    {
        nombre:'Miguel',
        apellido:'Medina',
        dni: '35642589',
        email:'miguelmedina@gmail.com',
        password:'Miguel1234',
        matricula:'12412',
        especialidad:'Oncologo',
        horario:['09:00am', '13:00pm', '16:00pm', '19:00pm'],
        dia:['sabado','domingo','Viernes']
    },
    {
        nombre:'Gabriel',
        apellido:'Lopez',
        dni: '12543422',
        email:'Gabriellopez@hotmail.com',
        password:'Gabriell1234',
        matricula:'12412',
        especialidad:'Oncologo',
        horario:['09:00am', '13:00pm', '16:00pm', '19:00pm'],
        dia:['Lunes','Jueves','Miercoles']
    },
    {
        nombre: 'Ana',
        apellido: 'Fernandez',
        dni: '78901234',
        email: 'anafernandez@gmail.com',
        password: 'Ana1234',
        matricula: '56789',
        especialidad: 'Cardiologo',
        horario: ['08:00am', '12:00pm', '15:00pm', '18:00pm'],
        dia: ['Martes', 'Jueves', 'Sabado']
    },
    {
        nombre: 'Luis',
        apellido: 'Martinez',
        dni: '56789012',
        email: 'luismartinez@gmail.com',
        password: 'Luis5678',
        matricula: '98765',
        especialidad: 'Dermatologo',
        horario: ['10:00am', '14:00pm', '17:00pm', '20:00pm'],
        dia: ['Lunes', 'Miercoles', 'Viernes']
    },
    {
        nombre: 'Maria',
        apellido: 'Rodriguez',
        dni: '34567890',
        email: 'mariarodriguez@gmail.com',
        password: 'Maria7890',
        matricula: '12345',
        especialidad: 'Gastroenterologo',
        horario: ['11:00am', '15:00pm', '18:00pm', '21:00pm'],
        dia: ['Martes', 'Jueves', 'Sabado']
    },
    {
        nombre: 'Carlos',
        apellido: 'Gomez',
        dni: '12345678',
        email: 'carlosgomez@gmail.com',
        password: 'Carlos5678',
        matricula: '54321',
        especialidad: 'Neurologo',
        horario: ['08:00am', '12:00pm', '15:00pm', '18:00pm'],
        dia: ['Lunes', 'Miercoles', 'Viernes']
    },
    {
        nombre: 'Laura',
        apellido: 'Hernandez',
        dni: '87654321',
        email: 'laurahernandez@gmail.com',
        password: 'Laura1234',
        matricula: '98765',
        especialidad: 'Pediatra',
        horario: ['10:00am', '14:00pm', '17:00pm', '20:00pm'],
        dia: ['Martes', 'Jueves', 'Sabado']
    },
    {
        nombre: 'Javier',
        apellido: 'Diaz',
        dni: '56781234',
        email: 'javierdiaz@gmail.com',
        password: 'Javier5678',
        matricula: '43210',
        especialidad: 'Oncologo',
        horario: ['11:00am', '15:00pm', '18:00pm', '21:00pm'],
        dia: ['Lunes', 'Miercoles', 'Viernes']
    },
    {
        nombre: 'Silvia',
        apellido: 'Torres',
        dni: '87654312',
        email: 'silviatorres@gmail.com',
        password: 'Silvia1234',
        matricula: '54321',
        especialidad: 'Cardiologo',
        horario: ['08:00am', '12:00pm', '15:00pm', '18:00pm'],
        dia: ['Martes', 'Jueves', 'Sabado']
    },
    {
        nombre: 'Ricardo',
        apellido: 'Ramirez',
        dni: '12348765',
        email: 'ricardoramirez@gmail.com',
        password: 'Ricardo5678',
        matricula: '87654',
        especialidad: 'Dermatologo',
        horario: ['10:00am', '14:00pm', '17:00pm', '20:00pm'],
        dia: ['Lunes', 'Miercoles', 'Viernes']
    }
];

pacientePendiente =[
    {
        nombre:'Ramiro',
        apellido:'Jodar',
        email:'ramirojodar@gmail.com',
        password:'Ramiro1234',
        dni:'30295441'
    },
    {
        nombre:'Emilia',
        apellido:'Gonzalez',
        email:'emiliagonzalez@gmail.com',
        password:'Emilia654',
        dni: '25413923'
    },
    {
        nombre:'Julian',
        apellido:'Martinez',
        email:'julianmartinez@gmail.com',
        password:'martinez1234',
        dni:'28546997'
    },
    {
        nombre:'Rodrigo',
        apellido:'Abregu',
        email:'peptd22io@23123.com',
        password:'Rodrigo264',
        dni:'23674421'
    },
    {
        nombre:'Augusto',
        apellido:'Jodar',
        email:'Augusto1@hotmail.com',
        password:'Augusto1234',
        dni:'27895645'
    },
    {
        nombre: 'Carlos',
        apellido: 'Martinez',
        email: 'carlosmartinez@gmail.com',
        password: 'Carlos1234',
        dni: '12345678'
    },
    {
        nombre: 'Laura',
        apellido: 'Diaz',
        email: 'lauradiaz@gmail.com',
        password: 'Laura5678',
        dni: '87654321'
    },
    {
        nombre: 'Sofia',
        apellido: 'Ramirez',
        email: 'sofiaramirez@gmail.com',
        password: 'Sofia5678',
        dni: '98765432'
    },
    {
        nombre: 'Javier',
        apellido: 'Lopez',
        email: 'javierlopez@gmail.com',
        password: 'Javier5678',
        dni: '56789012'
    }
  ] 

medicoPendiente = [
    { 
        nombre:'Juan',
        apellido:'Mendez',
        dni:'25364874',
        email:'juanmendez@gmail.com',
        password:'Juanperez22',
        matricula:'25641',
        especialidad:'Pediatra',  
    },
    {
        nombre:'Ramiro',
        apellido:'Correa',
        dni:'31054123',
        email:'ramirocorrea@hotmail.com',
        password:'Ramiro1234',
        matricula:'34541',
        especialidad:'Oncologo',   
    },
    {
        nombre:'Ramon',
        apellido:'Brizuela',
        dni:'21024154',
        email:'pepe@gmail.com',
        password:'12343asd',
        matricula:'12412',
        especialidad:'Oncologo',
    }  
];

paciente =[
    {
         nombre:'Miguel',
         apellido:'Guzman',
         email:'miguelguzman@gmail.com',
         password:'Miguel123',
         dni:'12355441',
         isAdmin: true
     },
     {
         nombre:'pepito 2',
         apellido:'yeins',
         email:'peptssio@23123.com',
         password:'34124a12asd',
         dni:'12341234',
         isAdmin: false,
     },
     {
         nombre:'pepito ',
         apellido:'Martinez',
         email:'pept22io@23123.com',
         password:'34124aasd',
         dni:'12341234',
         isAdmin: false,
     },
     {
         nombre:'Gustavo',
         apellido:'Leguizamon',
         email:'peptd22io@23123.com',
         password:'34124aasd',
         dni: '29445174',
         isAdmin: false,
     },
     {
         nombre:'Augusto',
         apellido:'Batalla',
         email:'peptio@23123.com',
         password:'34124aasd',
         dni: '36412698',
         isAdmin: false,
     },
     {
        nombre: 'Laura',
        apellido: 'Martinez',
        email: 'lauramartinez@gmail.com',
        password: 'Laura1234',
        dni: '56789012',
        isAdmin: false,
    },
    {
        nombre: 'Carlos',
        apellido: 'Gomez',
        email: 'carlosgomez@gmail.com',
        password: 'Carlos5678',
        dni: '98765432',
        isAdmin: false,
    },
    {
        nombre: 'Sofia',
        apellido: 'Ramirez',
        email: 'sofiaramirez@gmail.com',
        password: 'Sofia1234',
        dni: '34567890',
        isAdmin: false,
    },
    {
        nombre: 'Javier',
        apellido: 'Diaz',
        email: 'javierdiaz@gmail.com',
        password: 'Javier5678',
        dni: '87654321',
        isAdmin: false,
    },
    {
        nombre: 'Maria',
        apellido: 'Fernandez',
        email: 'mariafernandez@gmail.com',
        password: 'Maria1234',
        dni: '23456789',
        isAdmin: false,
    }
];


 function cargarObjetos() {
     const datosHardcodeados = {
         medico: medico || [],
         medicoPendiente: medicoPendiente || [],
         paciente: paciente || [],
         pacientePendiente: pacientePendiente || [],
         turnoPendiente: turnoPendiente || [],
         turno: turno || []
     };

     for (const clave in datosHardcodeados) {
         if (!localStorage.getItem(clave)) {
             localStorage.setItem(clave, JSON.stringify(datosHardcodeados[clave]));
        }
     }
 }