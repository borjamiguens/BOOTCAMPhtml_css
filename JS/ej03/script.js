function cambiar_contenido(){
    let now = new Date();
    let elem = document.getElementById("contenido");    
    elem.innerHTML = now;
}    

setInterval(cambiar_contenido,1000);