//****************************************************Eventos mas comunes en JS

// Eventos de Mouse:

// click: Se desencadena cuando se hace clic en un elemento.
// mouseover: Se activa cuando el cursor del mouse entra en un elemento.
// mouseout: Ocurre cuando el cursor del mouse sale de un elemento.
// mousedown: Se activa cuando se presiona un botón del mouse en un elemento.
// mouseup: Ocurre cuando se libera un botón del mouse después de ser presionado en un elemento.
// mousemove: Se dispara cuando el cursor del mouse se mueve dentro de un elemento.

// Eventos de Teclado:

// keydown: Se desencadena cuando se presiona una tecla.
// keyup: Ocurre cuando se libera una tecla después de ser presionada.
// keypress: Se dispara cuando una tecla que genera un carácter se presiona y se libera.

// Eventos de Formulario:

// submit: Se activa cuando se envía un formulario.
// input: Ocurre cuando el contenido de un campo de entrada cambia.
// change: Se dispara cuando el valor de un campo de entrada cambia y se pierde el enfoque.

// Eventos de Ventana:

// load: Se dispara cuando se completa la carga de la página o un recurso.
// resize: Ocurre cuando se cambia el tamaño de la ventana del navegador.
// scroll: Se activa cuando el usuario desplaza la página web.

// Eventos de Documento:

// DOMContentLoaded: Ocurre cuando el documento HTML se ha cargado y analizado completamente, sin esperar a que se carguen todos los recursos externos como imágenes.

// Eventos de Arrastrar y Soltar:

// dragstart: Se desencadena cuando se comienza a arrastrar un elemento.
// dragend: Ocurre cuando se completa una operación de arrastrar y soltar.
// dragover: Se activa cuando un elemento se arrastra sobre otro elemento válido para soltar.
// drop: Se dispara cuando se suelta un elemento arrastrado en otro elemento válido para soltar.

// Eventos de Tiempo:

// setTimeout: Permite ejecutar una función después de un cierto período de tiempo.
// setInterval: Permite ejecutar una función repetidamente en intervalos regulares de tiempo.
// Estos son solo algunos ejemplos de eventos en JavaScript. Puedes usar estos eventos para agregar interactividad a tu página web y responder a las acciones del usuario o cambios en el estado de la página.

// ************************************* eventos mas comunes en HTML

// Eventos de Ratón:

// onclick: Se desencadena cuando se hace clic en un elemento.
// onmouseover: Se activa cuando el cursor del mouse entra en un elemento.
// onmouseout: Ocurre cuando el cursor del mouse sale de un elemento.
// onmousedown: Se activa cuando se presiona un botón del mouse en un elemento.
// onmouseup: Ocurre cuando se libera un botón del mouse después de ser presionado en un elemento.
// onmousemove: Se dispara cuando el cursor del mouse se mueve dentro de un elemento.

// Eventos de Teclado:

// onkeydown: Se desencadena cuando se presiona una tecla.
// onkeyup: Ocurre cuando se libera una tecla después de ser presionada.
// onkeypress: Se dispara cuando una tecla que genera un carácter se presiona y se libera.

// Eventos de Formulario:

// onsubmit: Se activa cuando se envía un formulario.
// oninput: Ocurre cuando el contenido de un campo de entrada cambia.
// onchange: Se dispara cuando el valor de un campo de entrada cambia y se pierde el enfoque.

// Eventos de Ventana:

// onload: Se desencadena cuando se completa la carga de la página o un recurso.
// onresize: Ocurre cuando se cambia el tamaño de la ventana del navegador.
// onscroll: Se activa cuando el usuario desplaza la página web.

// Eventos de Arrastrar y Soltar:

// ondragstart: Se desencadena cuando se comienza a arrastrar un elemento.
// ondragend: Ocurre cuando se completa una operación de arrastrar y soltar.
// ondragover: Se activa cuando un elemento se arrastra sobre otro elemento válido para soltar.
// ondrop: Se dispara cuando se suelta un elemento arrastrado en otro elemento válido para soltar.

// Eventos de Hipervínculos y Navegación:

// onload: Se ejecuta cuando una página o recurso se ha cargado completamente.
// onbeforeunload: Ocurre justo antes de que el usuario abandone la página actual.
// Estos son solo algunos ejemplos de eventos HTML que puedes utilizar para interactuar con tu página web. Puedes asignar manejadores de eventos a estos eventos utilizando JavaScript para realizar acciones específicas cuando se produzcan estas interacciones.

const mostrar = () => {
  document.getElementById("seleccionable").innerHTML = Date();
};

function mostrar2() {
  document.getElementById("seleccionable2").innerHTML = Date();
}
function mostrar3() {
  document.getElementById("seleccionable3").innerHTML = "DIOS es mi pastor nada me faltara";
}
