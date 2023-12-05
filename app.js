turno = [
    { 
        paciente:'Jose',
        especialista:'Mendez',
        horario:'12:30',
        email:'pepe@olis',
        consulta:'Peditra',
        dia:'17/05/2023',
    },
]

turnoPendiente = [
    { 
        paciente:'Jose',
        especialista:'Lopez',
        dniMedico: "12543422",
        horario:'12:30',
        email:'pepe@olis',
        consulta:'Peditra',
        dia:'17/05/2023',
    },
]

medico = [
    { 
        nombre:'Juan Perez',
        apellido:'Mendez',
        dni: '41291322',
        email:'juanmendez@gmail.com',
        password:'Juanperez123',
        matricula:'12412',
        isAdmin:true,
        especialidad:'Pediatra'
    },
    {
        nombre:'Miguel',
        apellido:'Medina',
        dni: '35642589',
        email:'miguelmedina@gmail.com',
        password:'Miguel1234',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    },
    {
        nombre:'Gabriel',
        apellido:'Lopez',
        dni: '12543422',
        email:'Gabriellopez@hotmail.com',
        password:'Gabriell1234',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
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
        loged:false,
        especialidad:'Pediatra'
    },
    {
        nombre:'Ramiro',
        apellido:'Correa',
        dni:'31054123',
        email:'ramirocorrea@hotmail.com',
        password:'Ramiro1234',
        matricula:'34541',
        isAdmin:false,
        especialidad:'Oncologo'
    },
    {
        nombre:'Ramon',
        apellido:'Brizuela',
        dni:'21024154',
        email:'pepe@gmail.com',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    }
    
  ];

paciente =[
    {
         nombre:'pepito augusto',
         apellido:'Jodar',
         email:'peptio@23123.com',
         password:'34124aasd',
         dni:12341234,
         loged:false
     },
     {
         nombre:'pepito 2',
         apellido:'yeins',
         email:'peptssio@23123.com',
         password:'34124a12asd',
         dni:12341234,
         loged:false
     },
     {
         nombre:'pepito ',
         apellido:'Martinez',
         email:'pept22io@23123.com',
         password:'34124aasd',
         dni:12341234,
         loged:false
     },
     {
         nombre:'Gustavo',
         apellido:'Leguizamon',
         email:'peptd22io@23123.com',
         password:'34124aasd',
         dni: '29445174',
         loged:false
     },
     {
         nombre:'Augusto',
         apellido:'Batalla',
         email:'peptio@23123.com',
         password:'34124aasd',
         dni: '36412698',
         loged:false
     }
   ]

//  function cargarObjetos() {
//       if (!localStorage.getItem('medico')) {
//          localStorage.setItem('medico', JSON.stringify(medico));
//       }

//       if (!localStorage.getItem('medicoPendiente')) {
//           localStorage.setItem('medicoPendiente', JSON.stringify(medicoPendiente));
//       }
//       if (!localStorage.getItem('paciente')) {
//           localStorage.setItem('paciente', JSON.stringify(paciente));
//       }

//       if (!localStorage.getItem('pacientePendiente')) {
//           localStorage.setItem('pacientePendiente', JSON.stringify(pacientePendiente));
//       }

//       if (!localStorage.getItem('turno')) {
//          localStorage.setItem('turnoPendiente', JSON.stringify(turno));
//      }

//       if (!localStorage.getItem('turno')) {
//           localStorage.setItem('turno', JSON.stringify(turno));
//       }
//   }

// function cargarObjetos() {
//     // Estructura de datos hardcodeada
//     const datosHardcodeados = {
//         medico: medico,
//         medicoPendiente: medicoPendiente,
//         paciente: paciente,
//         pacientePendiente: pacientePendiente,
//         turno: turno
//     };

//     // Iterar sobre las claves y verificar si existen en localStorage
//     for (const clave in datosHardcodeados) {
//         if (!localStorage.getItem(clave)) {
//             // Si no existe, inicializar con los datos hardcodeados
//             localStorage.setItem(clave, JSON.stringify(datosHardcodeados[clave]));
//         }
//     }
// }

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