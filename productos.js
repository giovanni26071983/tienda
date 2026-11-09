const botones = document.querySelectorAll(".btnDetalle");
botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        const detalle = boton.nextElementSibling;
        if (detalle.hidden){
            detalle.hidden = false;
            boton.textContent = "Ocultar detalles";

        }
        else{
            detalle.hidden = true;
            boton.textContent = "Ver detalles";
        }
    })
})