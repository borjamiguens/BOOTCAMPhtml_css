let elem;

function cambiar_contenido(){
    let now = new Date();
    elem = document.querySelectorAll(".now") ;
    for (let i = 0; i < elem.length; i++) {
        elem[i].innerHTML=now;
        
    }    
}    

setInterval(cambiar_contenido,1000);