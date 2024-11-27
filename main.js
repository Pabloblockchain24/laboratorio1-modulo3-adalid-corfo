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
      console.log('El doctor a renderizar es', doctor)
      const cardHTML = `
        <div class="col profesionales">
          <div class="card" >
            <img src="${doctor.imagen}" alt="${doctor.nombre}" class="card__image-Resizing" />
            <div class="card-body">
              <h5 class="card-title">${doctor.nombre}</h5>
              <p class="card-text">${doctor.servicio_medico}</p>
              <p class="card-text">${doctor.experiencia} años de experiencia.</p>
              <p class="card-text">${doctor.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      equipoContainer.innerHTML += cardHTML;
    });
}

async function filtrarEquipo() {
  try {
    const response = await fetch('../assets/data/doctores.json'); 
    let doctores = await response.json();
    const filtroExperiencia = document.getElementById('filtroExperiencia').value;
    const filtroServicio = document.getElementById('filtroServicio').value;

    if (filtroServicio) {
      doctores = doctores.filter(doctor => doctor.servicio_medico.toLowerCase().includes(filtroServicio.toLowerCase()));
    }
    if (filtroExperiencia) {
      doctores = doctores.filter(doctor => doctor.experiencia >= parseInt(filtroExperiencia));
    }
    console.log('Los doctores filtrados son: ', doctores)
    renderizarDoctores(doctores);
  } catch (error) {
    console.error('Error al cargar los doctores:', error);
  }
}

window.onload = filtrarEquipo;