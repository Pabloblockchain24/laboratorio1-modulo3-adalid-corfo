function tieneNumeros(nombre) {
    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i]) && nombre[i] !== " ") {
            return true;
        }
    }
    return false;
}

function tieneArroba(email) {
    return email.includes('@');
}

function telefonoValido(telefono) {
    return telefono.length === 11 && !isNaN(telefono);
  }

function solicitarContacto(){
    alert('Porfavor ingresa los siguientes datos')
    // Solicito nombre por primera vez
    let nombre = prompt("¿Cuál es tu nombre?");
    // Verifico que no este vacio o que no tenga numeros
    while ( !nombre || tieneNumeros(nombre)) {
        nombre = prompt("Nombre ingresado es incorrecto, ingresalo nuevamente");
    }
    let email = prompt("¿Cuál es tu correo electrónico?");
    while ( !email || !tieneArroba(email)) {
        email = prompt("Email ingresado es incorrecto, ingresalo nuevamente");
    }
    let telefono = prompt("¿Cuál es tu número de teléfono?; Considera este formato 56912345678");
    while ( !telefono || !telefonoValido(telefono)) {
        telefono = prompt("El telefono ingresado es incorrecto, ingresalo nuevamente");
    }
    // Muestro los datos ingresados en un alert
    alert(`Los datos ingresados son: 
        - Nombre: ${nombre}
        - Email: ${email}
        - Teléfono: ${telefono}`);
    // Muestro los datos ingresados en un console.log()
    console.log(`Los datos ingresados son:
        - Nombre: ${nombre}
        - Email: ${email}
        - Teléfono: ${telefono}`)    
}

async function renderizarDoctores(doctores) {

    const equipoContainer = document.getElementById('equipo-medico');
    equipoContainer.innerHTML = '';
    doctores.forEach((doctor) => {
      const{
        nombre,
        imagen,
        especialidad,
        anios_experiencia,
        descripcion        
      } = doctor
      console.log('El doctor a renderizar usando desestructuring es', doctor)
      const cardHTML = `
        <div class="col profesionales">
          <div class="card" >
            <img src="${imagen}" alt="${nombre}" class="card__image-Resizing" />
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">${especialidad}</p>
              <p class="card-text">${anios_experiencia} años de experiencia.</p>
              <p class="card-text">${descripcion}</p>
            </div>
          </div>
        </div>
      `;
      equipoContainer.innerHTML += cardHTML;
    });
}

async function filtrarEquipo(doctores) {
  try {
    const doctorOriginal = doctores[0];
    const doctorClonado = { ...doctorOriginal, nombre: "Dr. Clonado", anios_experiencia: 99 };
    console.log('Doctor Original:', doctorOriginal);
    console.log('Doctor Clonado:', doctorClonado);

    const serviciosDisponibles = { servicios: ["Cirugía", "Consultas", "Emergencias"] };
    const doctorFusionado = { ...doctorOriginal, ...serviciosDisponibles };
    console.log('Doctor Fusionado:', doctorFusionado);

    const filtroExperiencia = document.getElementById('filtroExperiencia').value;
    const filtroServicio = document.getElementById('filtroServicio').value;
   
    if (filtroServicio) {
      doctores = doctores.filter(doctor => doctor.especialidad.toLowerCase().includes(filtroServicio.toLowerCase()));
    }
    if (filtroExperiencia) {
      doctores = doctores.filter(doctor => doctor.anios_experiencia >= parseInt(filtroExperiencia));
    }
    // algoritmo de ordenamiento por años de experiencia
    doctores.sort((a, b) => b.anios_experiencia - a.anios_experiencia);
     
    const doctoresString = JSON.stringify(doctores, null, 2);
    console.log('Doctores filtrados como JSON:', doctoresString);

    renderizarDoctores(doctores);
  } catch (error) {
    console.error('Error al cargar los doctores:', error);
  }
}

// Aqui crearemos funciones para agregar, eliminar y buscar doctores

function agregarDoctor(doctores, nuevoDoctor) {
  doctores.push(nuevoDoctor);
  console.log('Agregue doctor')
}

function eliminarDoctor(doctores) {
  doctorEliminado = doctores.pop();
  console.log('Doctor eliminado', doctorEliminado)
}
//Algoritmo de busqueda
function buscarDoctor(doctores, doctorABuscar) {
  const doctorBuscado = doctores.find(doctor => doctor.nombre === doctorABuscar);
  if (doctorBuscado) {
    console.log('Doctor encontrado:', doctorBuscado);
  } else {
    console.log('Doctor no encontrado');
  }
} 

async function cargarDoctores() {
  try {
    const response = await fetch('../assets/data/doctores.json'); 
    const doctores = await response.json();

    agregarDoctor(doctores, {
      "nombre": "Dr. Juan Perez",
      "especialidad": "Oftalmologia",
      "descripcion": "Dr. Juan Perez tiene 20 años de experiencia en la salud publica y privada especializandose en Oftalmologia, destacandose por el tratemiento de enfermedades en la retina y cornea.",
      "imagen": "../assets/img/dr_juan_perez.webp",
      "anios_experiencia": 20,
      "disponibilidad": "disponible",
      "informacion_adicional": {
        "contacto": "+569 1234 5678",
        "horas_disponibles": "9:00 - 18:00"
      }
    });
    eliminarDoctor(doctores);
    buscarDoctor(doctores, 'Dr. Carlos Ramirez');
    
    filtrarEquipo(doctores);
  } catch (error) {
    console.error('Error al cargar los doctores:', error);
  }
}

// Aqui crearemos citas
function agregarCita(citas, nuevaCita) {
  citas.push(nuevaCita);
  console.log('Agregue cita', nuevaCita)
}

function manejarPila() {
  const citas = [];
  agregarCita(citas, 'cita1')
  agregarCita(citas, 'cita2')
  agregarCita(citas, 'cita3')
  agregarCita(citas, 'cita4')
  agregarCita(citas, 'cita5')

  console.log('La ultima agendada es', citas[citas.length - 1])
  console.log('La proxima cita a atender es', citas.shift())
}

function manejarCola(){
  const colaContacto = []

  colaContacto.push('contacto1')
  colaContacto.push('contacto2')
  colaContacto.push('contacto3')
  colaContacto.push('contacto4')
  console.log('El proximo contacto a atender es', colaContacto.shift())   
}

function iniciar() {
  cargarDoctores();
  manejarPila();
  manejarCola();
}

window.onload = iniciar;
