/*
    Se encarga de que al abrir el html relacionado con la tienda, deje seleccionada la opción indicando que 
    el usuario se encuentra en esa seccion
*/
let menuTienda = document.getElementsByTagName("a");
for (const opcion of menuTienda) {
    if(opcion.innerText==='TIENDA'){
        opcion.classList.add('seleccionado');
    }
    
}