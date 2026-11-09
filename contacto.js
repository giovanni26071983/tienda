
//procesar los datos del formulario de contacto
//buscamos los elementos del formulario formContacto y el parrafo respuesta
const formContacto = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");
//escguchamos el evento submit del formulario
formContacto.addEventListener("submit",function(event){
    event.preventDefault(); //evita que se recargiue
    //leemos los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    //limpiamos el formulario
    formContacto.reset();
    //mostramos un mensaje de exito en el parrafo respuesta
    mostrarMensaje("gracias por contactarnos, "+nombre+"te responderemo a al brevedad.","exito");
});

formContacto.addEventListener("reset",function(event){
    //limpiamos el parrafo respuesta al limpiar el formulario
    respuesta.textContent="";
    respuesta.className="";//quitamos la clase de exito o error
});
//funciom que muestra un texto en el parrafo respusta cuando se carga
function mostrarMensaje(texto,tipo){
    respuesta.textContent=texto;
    respuesta.className=tipo; //tipo puede ser exito o error
}