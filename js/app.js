//Funcion para Animar el logo de la Bienvenida en cueanto cargue la página
function animarLogoBienvenida() {
  const $logoContainer = this.document.querySelector(".img-logo-container");
  $logoContainer.classList.add("subir");
}

//Funcion para Animar el texto de presentacion en cuanto cargue la página
function animarPresentacion() {
  const $presentacion = this.document.querySelector(".presentacion");
  for (const titulos of $presentacion.children) {
    titulos.classList.add("aparecer-izquierda");
  }
}
//Funcion para Animar la barra superior en cuanto cargue la página
function animarBarraSuperior() {
  const $barraSuperior = this.document.querySelector("#inicio").children;
  for (const elemento of $barraSuperior) {
    if (elemento.className === "iconos") {
      elemento.classList.add("aparecer-izquierda");
    }
    elemento.classList.add("aparecer-derecha");
  }
}

//Funcion para Animar el Navbar
function animarNavbar() {
  const $navbar = this.document.querySelector("nav").children;
  for (const elemento of $navbar) {
    if (elemento.localName === "div") {
      elemento.classList.add("aparecer-izquierda");
    }
    elemento.classList.add("aparecer-derecha");
  }
}

//Funcion que se ejecuta mientras se carga la pagina 
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("ocultar");
  animarLogoBienvenida();
  animarPresentacion();
  animarBarraSuperior();
  animarNavbar();
});




function mostrarSecciones() {
  const $secciones = document.getElementsByClassName('animar-entrada');

  
  for (let i = 0; i < $secciones.length; i++) {
    let $secccion = $secciones[i];
    let alturaSeccion = $secccion.getBoundingClientRect().top;
    let anchoVentana = window.innerHeight;
    if (alturaSeccion - anchoVentana <= 0) {
      //Se aplica un operador ternario para hacer que las secciones que están en las posiciones pares aperzcan por la izquierda y las impares por la derecha.
      i%2 == 0 ?  $secccion.classList.add("aparecer-izquierda"): $secccion.classList.add("aparecer-derecha");
    }
  }
}


window.addEventListener('scroll', mostrarSecciones);
