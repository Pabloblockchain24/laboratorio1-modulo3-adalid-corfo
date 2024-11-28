# Laboratorio 1 - Módulo 3 Adalid Corfo

## Descripción del Proyecto

Este proyecto es un taller para el Módulo 3 del curso Adalid Corfo. Se trata de un sitio web simple que presenta un hospital médico con tres secciones principales: Home, Equipo Médico y Contacto. El objetivo es implementar un sitio web modular utilizando HTML, SCSS, CSS y JavaScript, se han aplicado media queries y modularización de estilos mediante el uso de SASS para una estructura más clara y mantenible, además se usa el framework de css Bootstrap para optimizar el desarrollo del proyecto, incorporando componentes como buttons, forms, grids y cards y JavaScript para manejar filtros y mostrar datos de manera dinámica.

## Instrucciones para Visualizar el Proyecto

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Pabloblockchain24/ejercicio-taller2-modulo3-adalid-corfo.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd laboratorio1-modulo3-adalid-corfo
    ```

3. Instala las dependencias de SASS si aún no lo has hecho:

    ```bash
    npm install -g sass
    ```

4. Compila los archivos SASS:

    ```bash
    sass .\assets\styles\main.scss estilos.css
    ```

5. Abre el archivo `index.html` en tu navegador favorito para visualizar el proyecto.

## Estructura de carpetas y archivos

```
laboratorio1-modulo3-adalid-corfo/
│
├── index.html              # Página principal (Home)
├── pages/
│   └── equipoMedico.html   # Página del equipo médico
│   └── contacto.html       # Página de contacto              
├── assets/img/
│   └── [imágenes utilizadas en el proyecto]
├── assets/styles/
│   └── abstracts
│        └── _variables.scss  # Estilos parciales de breakpoints
│        └── _mixins          # Para reutilización de codigo repetitivo como box-shadow
│   └── base 
│        └── _fonts.scss      # Estilos parciales de fuentes y tamaños de letra
│   └── components
│        └── _buttons.scss    # Estilos para buttons
│   └── layout
│        └── _footer.scss    # Estilos parciales de footer
│        └── _header.scss    # Estilos parciales de header
│   └── pages
│        └── _contacto.scss         # Estilos parciales para page contacto
│        └── _equipo-medico.scss    # Estilos parciales para page equipo-medico
│        └── _main.scss             # Estilos parciales para page main
│   └── themes
│        └── _theme-adalid.scss     # Estilos parciales para colores y tema de la web 
│   └── vendors
│        └── _custom-bootstrap.scss  # Estilos para customizar los estilos por defecto de bootstrap
│        └── _reset.scss             # Estilos basicos e iniciales de la web
│   └── main.scss            # Archivo que une los scss parciales
└── estilos.css              # Archivo resultante del preprocesador sass
└── estilos.css.map          # Archivo resultante del preprocesador sass
└── main.js                  # Archivo JavaScript que maneja la lógica de la aplicación
└── README.md                # Instrucciones y descripción del proyecto
```

## Modularización de Estilos

La estructura de los estilos está organizada utilizando SASS, dividiendo los estilos en archivos parciales para mejorar la organización y modularidad del código. Los archivos parciales están agrupados por funcionalidades, como layout, componentes, páginas, temas, entre otros. 

- `abstracts/_mixins.scss`: Define estilos que se pueden reutilizar como los box-shadows.
- `abstracts/_variables.scss`: Define los breakpoint a utilizar.
- `base/_fonts.scss`: Contiene las definiciones de fuentes utilizadas en el proyecto.
- `components/_buttons.scss`: Define estilos adicionales a los de bootstrap para los botones.
- `components/_inputs.scss`: Define estilos de inputs usados en los filtros de la page equipo médico. 
- `layout/_header.scss`: Estilos específicos para la cabecera.
- `layout/_footer.scss`: Estilos del pie de página.
- `pages/_contacto.scss`: Estilos específicos de la página de contacto.
- `pages/_equipo-medico.scss`: Estilos específicos de la página del equipo médico.
- `pages/_main.scss`: Estilos específicos de la página principal de la web
- `themes/_theme-adalid.scss`: Estilos para el colores y tema personalizado del sitio.
- `vendors/_custom-bootstrap.scss`: Redefine algunos estilos que vienen por defecto con bootstrap.
- `vendors/_reset.scss`: Contiene un reset CSS básico para normalizar estilos entre navegadores.

Todos estos archivos se importan en el archivo principal `main.scss`, que se compila en el archivo CSS final.

## Media Queries

Se han implementado media queries en varios de los archivos parciales para asegurar que el diseño sea completamente responsivo. Los principales puntos de ruptura (`breakpoints`) son:

- 1200px: Para pantallas grandes.
- 1024px: Para pantallas medianas.
- 768px: Para tabletas.
- 576px: Para tabletas pequeñas y moviles grandes
- 420px: Para moviles pequeños

Estos breakpoints se aplican en las secciones necesarias, como el layout y los componentes, para que el sitio funcione correctamente en diferentes tamaños de pantalla.

## Metodología BEM

Se ha aplicado la metodología BEM (Block Element Modifier) en la nomenclatura de las clases CSS para asegurar que los estilos sean fácilmente comprensibles y mantenibles. La estructura BEM se divide de la siguiente manera:

Block: Representa un componente independiente. Por ejemplo, .header o .footer.
Element: Es un componente que forma parte de un bloque y tiene una relación directa con él. Se define como __element. Por ejemplo, .header__title, .footer__link.
Modifier: Indica una variante de un bloque o elemento, proporcionando un estado o un estilo diferente. Se define como --modifier. Por ejemplo, .button--primary, .header--fixed.
Esta metodología permite que el desarrollo de estilos sea más escalable y menos propenso a conflictos, facilitando la colaboración en equipo y el mantenimiento del código.

## Integración de Bootstrap y Modificaciones Realizadas con SASS

Bootstrap se ha integrado en el proyecto para aprovechar sus componentes y grid system. Se han realizado las siguientes modificaciones mediante SASS:

- Se ha personalizado la hoja de estilos de Bootstrap (`_custom-bootstrap.scss`) para ajustar los estilos predeterminados a las necesidades del diseño del hospital, como colores, tipografías y espaciados.
- Se han creado mixins en `_mixins.scss` para facilitar la reutilización de estilos específicos de Bootstrap y otros componentes, permitiendo mantener un código más limpio y modular.
- Se han utilizado componentes card, buttons, form y grid. con las respectivas modificaciones para una correcta customización respecto a la identidad corporativa.

## Explicación de las vistas

- **Home (index.html):** Esta es la página principal del sitio. Contiene una bienvenida a los usuarios y una breve descripción del Hospital. Se incluyen enlaces de navegación a las otras secciones del sitio.
  
- **Equipo Médico (equipo-medico.html):** En esta sección se presenta al equipo de médicos del hospital. Cada miembro tiene su propia descripción, destacando su especialidad y experiencia.

- **Contacto (contacto.html):** Aquí se ofrece un formulario de contacto para que los usuarios puedan enviar mensajes o consultas al hospital. Se incluyen campos como nombre, correo electrónico y mensaje.

## Explicación funcionamiento event loop (stack, heap, queue)

El **Event Loop** es el mecanismo que permite que JavaScript maneje múltiples tareas de manera eficiente, a pesar de ser un lenguaje de un solo hilo. A continuación, se describen los componentes clave del Event Loop:

### Call Stack (Pila de llamadas)
- Es una estructura de datos **LIFO** (Last In, First Out) que gestiona las funciones que se ejecutan en el programa.
- Cada vez que se llama a una función, se agrega a la pila.
- Cuando la función termina, se elimina de la pila.

### Heap
- Es una región de memoria donde se almacenan los objetos y datos dinámicos utilizados por el programa.
- El **Garbage Collector** se encarga de liberar la memoria no utilizada en el Heap.

### Task Queue (Cola de Tareas)
- Es una cola **FIFO** (First In, First Out) donde se colocan las tareas asíncronas (como eventos del DOM, promesas resueltas y callbacks) una vez que están listas para ejecutarse.

### Proceso del Event Loop
1. El Event Loop verifica continuamente si el **Call Stack** está vacío.
2. Si el Call Stack está vacío, toma la primera tarea de la **Task Queue** y la empuja al Call Stack para ejecutarla.

Este mecanismo asegura que las tareas asíncronas se manejen de manera ordenada y eficiente, sin bloquear la ejecución del código principal.

## Uso de Variables y su scope

En este proyecto, se utilizan las palabras clave `let` y `const` para declarar variables. A continuación, se describe su uso y alcance.

### let
- `let` se utiliza para declarar variables cuyo valor puede cambiar posteriormente.
- **Scope:** Su alcance está limitado al bloque `{}` en el que se declara. Esto significa que no se puede acceder a la variable fuera de dicho bloque.
   
### const
- `const` se utiliza para declarar constantes, es decir, valores que no pueden ser reasignados una vez definidos.
- **Scope:** Al igual que `let`, su alcance está limitado al bloque `{}` en el que se declara.

La diferencia en el uso de let y const radica en la posibilidad de reasignar el valor de la variable. 

## Utilización de debugger para rasteo de posibles errores y manejo de try/catch 

En este proyecto, se utiliza el `debugger` para rastrear posibles errores dentro del código y analizar el flujo de ejecución. A continuación, se describe su uso y ejemplos.

### ¿Qué es el Debugger?
El `debugger` es una palabra clave en JavaScript que detiene la ejecución del programa en el momento en que se encuentra, permitiendo inspeccionar variables, valores y el estado del programa en herramientas de depuración como las que ofrecen navegadores o entornos de desarrollo como VS Code.

### Ejemplo de Uso
```javascript
function calcularSuma(a, b) {
  debugger; // Pausa la ejecución aquí
  const suma = a + b;
  return suma;
}

const resultado = calcularSuma(5, 10);
console.log(resultado);
```

1. Cuando el programa llega a la línea `debugger`, la ejecución se pausa.
2. Puedes inspeccionar los valores de `a`, `b` y `suma` en las herramientas de desarrollo antes de continuar.

El uso de `debugger` es una herramienta poderosa para encontrar errores, pero se debe eliminar del código en producción para evitar interrupciones.

### Manejo de Errores con `try/catch`

El bloque `try/catch` es una estructura de control utilizada para manejar errores en JavaScript. Permite ejecutar un bloque de código y, si ocurre un error, capturarlo y manejarlo de manera adecuada sin que el programa se interrumpa abruptamente.

#### ¿Cómo Funciona el `try/catch`?

- El bloque `try` contiene el código que puede generar un error.
- Si ocurre un error dentro del bloque `try`, se ejecuta el bloque `catch`, donde se puede manejar el error.
- Si no ocurre un error, el bloque `catch` es ignorado.

#### Ejemplo de Uso de `try/catch`

```javascript
function dividirNumeros(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    const resultado = a / b;
    return resultado;
  } catch (error) {
    console.error(error.message); // Muestra el mensaje del error
    return null;
  }
}

const resultado = dividirNumeros(10, 0);
console.log(resultado); // Muestra null
```

1. El bloque `try` contiene la lógica para dividir dos números.
2. Si el divisor `b` es cero, se lanza un error con `throw`.
3. El bloque `catch` captura el error y lo maneja, imprimiendo el mensaje de error en la consola y retornando `null` en lugar de una operación fallida.


## Descripción de integración de prompts y como validar datos ingresados

### Flujo de la Función `solicitarContacto`

La función `solicitarContacto` solicita al usuario que ingrese tres datos: su nombre, correo electrónico y número de teléfono. Cada uno de estos datos es validado antes de ser aceptado.

1. **Solicitar Nombre:**
   - Se utiliza un `prompt` para pedir el nombre del usuario.
   - Si el nombre está vacío o contiene números, se solicita nuevamente al usuario hasta que ingrese un nombre válido.
   - La validación del nombre se realiza mediante la función `tieneNumeros`, que verifica que no haya números en el nombre ingresado.

2. **Solicitar Correo Electrónico:**
   - Se solicita al usuario que ingrese su correo electrónico mediante un `prompt`.
   - Si el correo está vacío o no contiene el símbolo `@`, se solicita nuevamente hasta que se ingrese un correo válido.
   - La validación del correo se realiza mediante la función `tieneArroba`, que asegura que el correo tenga el símbolo `@`.

3. **Solicitar Teléfono:**
   - Se solicita el número de teléfono al usuario, indicando el formato esperado (11 dígitos, comenzando con '569').
   - Si el número está vacío o no cumple con el formato requerido, se solicita nuevamente.
   - La validación del teléfono se realiza mediante la función `telefonoValido`, que verifica que el teléfono tenga 11 dígitos y sea un número.

### Funciones de Validación

- **`tieneNumeros(nombre)`**: Verifica si el nombre contiene números. Si encuentra un número, retorna `true`; de lo contrario, retorna `false`.
- **`tieneArroba(email)`**: Verifica si el correo electrónico contiene el símbolo `@`. Retorna `true` si lo encuentra, de lo contrario, retorna `false`.
- **`telefonoValido(telefono)`**: Verifica si el número de teléfono tiene exactamente 11 caracteres y si es un número. Retorna `true` si es válido, de lo contrario, `false`.

## Complejidad de los algoritmos utilizados, aplicando conceptos de Big-O y complejidad ciclomática.

La eficiencia del código se mide utilizando Big-O para determinar el tiempo y espacio necesarios al crecer los datos, así como la complejidad ciclomática para evaluar su mantenibilidad.

---

### Complejidad de los Algoritmos (Big-O)

#### Renderización de Doctores
**Función:** `renderizarDoctores`  
- **Descripción:** Itera sobre el arreglo de doctores utilizando `forEach` para generar tarjetas HTML dinámicamente.  
- **Complejidad Temporal:** \( O(n) \), donde \( n \) es el número de doctores.  
- **Complejidad Espacial:** Depende del tamaño del DOM generado.

#### Filtrado de Doctores
**Función:** `filtrarEquipo`  
- **Descripción:**  
  - Aplica filtros a los doctores utilizando `filter` y ordena los resultados con `sort`.  
  - Combina objetos utilizando el operador `...` para clonar y fusionar.  
- **Complejidad Temporal:**  
  - Filtrado: \( O(n) \) por cada filtro aplicado.  
  - Ordenamiento: \( O(n \log n) \).  
  - Total: Dominado por el ordenamiento, \( O(n \log n) \).  
- **Complejidad Espacial:** \( O(n) \) para almacenar los resultados intermedios.

#### Búsqueda de Doctores
**Función:** `buscarDoctor`  
- **Descripción:** Busca un doctor por nombre utilizando `find`.  
- **Complejidad Temporal:** \( O(n) \), en el peor caso, se recorre todo el arreglo.  
- **Complejidad Espacial:** \( O(1) \).

#### Agregar y Eliminar Doctores
**Funciones:** `agregarDoctor`, `eliminarDoctor`  
- **Descripción:** Utilizan `push` y `pop` para modificar el arreglo.  
- **Complejidad Temporal:** \( O(1) \).  
- **Complejidad Espacial:** \( O(1) \).

#### Clonación y Fusión de Objetos
**Operadores:** `...`  
- **Descripción:** Clona y combina propiedades de objetos.  
- **Complejidad Temporal:** \( O(k) \), donde \( k \) es el número de propiedades del objeto.  
- **Complejidad Espacial:** \( O(k) \).

---

### Complejidad Ciclomática

La complejidad ciclomática mide el número de caminos independientes en el código. Se calcula como:  
**M = E - N + 2**, donde \( E \) son los bordes y \( N \) los nodos del flujo de control.

#### Ejemplo: `filtrarEquipo`
- **Condiciones:**  
  - Filtro por especialidad.  
  - Filtro por experiencia.  
- **Flujo de Control:**  
  1. Si `filtroServicio` existe, filtrar por especialidad.  
  2. Si `filtroExperiencia` existe, filtrar por experiencia.  
  3. Ordenar resultados.  
- **Cálculo:** \( M = 5 - 4 + 2 = 3 \).

La complejidad ciclomática es baja en la mayoría de las funciones, oscilando entre 2 y 4, lo que indica que el código es fácil de mantener y probar.



## Explicación de cómo se implementaron los objetos JSON y las operaciones realizadas (clonación, merge, recorrido).

### Operaciones realizadas

#### Clonación de objetos
Se realizó la clonación de un objeto doctor para generar una nueva copia con modificaciones específicas. Esto se logró utilizando el operador de propagación (`spread operator`).

**Ejemplo:**
const doctorClonado = { ...doctorOriginal, nombre: "Dr. Clonado", anios_experiencia: 99 };

#### Merge de objetos
La fusión combina las propiedades de varios objetos en uno solo, utilizando nuevamente el operador de propagación. Esto se usa para extender la información de un doctor con datos adicionales como servicios disponibles.

**Ejemplo:**
const serviciosDisponibles = { servicios: ["Cirugía", "Consultas", "Emergencias"] };
const doctorFusionado = { ...doctorOriginal, ...serviciosDisponibles };

#### Recorrido de objetos
El sistema permite recorrer, filtrar y ordenar una lista de doctores almacenada como JSON.
Los doctores se filtran según los valores seleccionados en la interfaz (por ejemplo, experiencia mínima o especialidad).

**Ejemplo:**
doctores = doctores.filter(doctor => doctor.anios_experiencia >= parseInt(filtroExperiencia));
doctores = doctores.filter(doctor => doctor.especialidad.toLowerCase().includes(filtroServicio.toLowerCase()));


## Explicación de las estructuras de datos implementadas (arreglos, pilas, colas) y su utilidad en el proyecto.

En este proyecto se utilizan distintas estructuras de datos (arreglos, pilas y colas) para gestionar y organizar información de manera eficiente. A continuación, se describe cada estructura, su implementación y utilidad en el proyecto.

### Arreglos
Los **arreglos** son la estructura de datos base en este proyecto, utilizados para almacenar listas de elementos como doctores, citas y contactos. Métodos como push, pop, shift y filter facilitan la adición, eliminación y búsqueda de elementos en la lista.

Se utiliza un arreglo para almacenar citas médicas:
const citas = [];
agregarCita(citas, 'cita1');
agregarCita(citas, 'cita2');

### Pilas
Las pilas son una estructura de datos LIFO (Last In, First Out), donde el último elemento que se agrega es el primero en salir. En el proyecto, se utilizan pilas para manejar las citas médicas.

Ejemplo:
function manejarPila() {
  const citas = [];
  agregarCita(citas, 'cita1');
  console.log('La última cita agendada es:', citas[citas.length - 1]);
}

### Colas
Las colas son una estructura de datos FIFO (First In, First Out), donde el primer elemento que se agrega es el primero en salir. Se implementa para gestionar los contactos en una lista de espera.

Ejemplo:
function manejarCola() {
  const colaContacto = [];
  colaContacto.push('contacto1');
  console.log('El próximo contacto a atender es:', colaContacto.shift());
}

## Descripción de los algoritmos implementados y su complejidad.
Este proyecto utiliza varios algoritmos clave para gestionar datos relacionados con doctores. A continuación, se describen brevemente:

### 1. Renderización de Doctores
**Función:** `renderizarDoctores`  
- **Descripción:** Recorre la lista de doctores (`forEach`), genera dinámicamente tarjetas HTML y las inserta en el DOM.  

### 2. Filtrado y Ordenamiento
**Función:** `filtrarEquipo`  
- **Descripción:** Filtra doctores por experiencia y especialidad, luego los ordena por años de experiencia.  

### 3. Búsqueda de Doctores
**Función:** `buscarDoctor`  
- **Descripción:** Encuentra un doctor específico por nombre utilizando `find`.  

### 4. Agregar y Eliminar
**Funciones:** `agregarDoctor`, `eliminarDoctor`  
- **Descripción:** Utilizan `push` para añadir y `pop` para eliminar doctores del arreglo.  

### 5. Clonación y Fusión
**Operadores:** `...` (Spread)  
- **Descripción:** Clona objetos y fusiona propiedades


## Créditos

- Las imágenes utilizadas en este proyecto fueron obtenidas desde https://www.chatgpt.com



