let turno = [
    { 
        paciente:'Jose',
        especialista:'Mendez',
        horario:'12:30',
        email:'pepe@olis',
        consulta:'Peditra',
        dia:'17/05/2023',
    },
]

let turnoPendiente = [
    { 
        paciente:'Jose',
        especialista:'Mendez',
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
        dni:'12431235',
        email:'juanmendez@gmail.com',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Pediatra'
    },
    {
        nombre:'Jose',
        apellido:'Pierini',
        dni:'12431235',
        email:'pepe@olis',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    },
    {
        nombre:'Jose',
        apellido:'Pierini',
        dni:'12431235',
        email:'pepe@olis',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    }
    
  ];
medicoPendiente =[
    {
        nombre:'pepito augusto',
        apellido:'Jodar',
        email:'peptio@23123.com',
        password:'34124aasd',
        dni:12341234
    },
    {
        nombre:'pepito 2',
        apellido:'yeins',
        email:'peptssio@23123.com',
        password:'34124a12asd',
        dni:12341234
    },
    {
        nombre:'pepito ',
        apellido:'Martinez',
        email:'pept22io@23123.com',
        password:'34124aasd',
        dni:12341234
    },
    {
        nombre:'Pepsi',
        apellido:'Jodar',
        email:'peptd22io@23123.com',
        password:'34124aasd',
        dni:12341234
    },
    {
        nombre:'augusto',
        apellido:'Jodar',
        email:'peptio@23123.com',
        password:'34124aasd',
        dni:12341234
    }
  ]
paciente = [
    { 
        nombre:'Juan Perez',
        apellido:'Mendez',
        dni:'12431235',
        email:'pepe@olis',
        password:'12343asd',
        matricula:'12412',
        loged:false,
        especialidad:'Pediatra'
    },
    {
        nombre:'Jose',
        apellido:'Pierini',
        dni:'12431235',
        email:'pepe@olis',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    },
    {
        nombre:'Jose',
        apellido:'Pierini',
        dni:'12431235',
        email:'pepe@gmail.com',
        password:'12343asd',
        matricula:'12412',
        isAdmin:false,
        especialidad:'Oncologo'
    }
    
  ];
 pacientePendiente =[
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
         nombre:'Pepsi',
         apellido:'Jodar',
         email:'peptd22io@23123.com',
         password:'34124aasd',
         dni:12341234,
         loged:false
     },
     {
         nombre:'auguste',
         apellido:'Jodar',
         email:'peptio@23123.com',
         password:'34124aasd',
         dni:12341234,
         loged:false
     }
   ]

 function cargarObjetos() {
      if (!localStorage.getItem('medico')) {
         localStorage.setItem('medico', JSON.stringify(medico));
      }

      if (!localStorage.getItem('medicoPendiente')) {
          localStorage.setItem('medicoPendiente', JSON.stringify(medicoPendiente));
      }
      if (!localStorage.getItem('paciente')) {
          localStorage.setItem('paciente', JSON.stringify(paciente));
      }

      if (!localStorage.getItem('pacientePendiente')) {
          localStorage.setItem('pacientePendiente', JSON.stringify(pacientePendiente));
      }

      if (!localStorage.getItem('turno')) {
         localStorage.setItem('turnoPendiente', JSON.stringify(turno));
     }

      if (!localStorage.getItem('turno')) {
          localStorage.setItem('turno', JSON.stringify(turno));
      }
  }

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

cargarObjetos();
