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
});


//Hacer que se animen los elementos en cuanto apareza la pagina web
window.addEventListener("DOMContentLoaded", function () {
  animarLogoBienvenida();
  animarPresentacion();
  animarBarraSuperior();
  animarNavbar();
});

// Evento asociado al scroll
window.addEventListener("scroll", function () {
  const $quienesSomos = this.document.querySelector(
    ".informacion-servicio-descripcion"
  );
  let posicionSeccion = $quienesSomos.getBoundingClientRect().top;
  var alturaPantalla = window.innerHeight;
  if (posicionSeccion < alturaPantalla) {
    $quienesSomos.classList.add("aparecer-izquierda");
  }
});
