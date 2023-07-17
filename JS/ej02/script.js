let listaColores = ["red","green","yellow","orange","blue"];
let indice = 0;

function cambiar_color(){
    
    let elem = document.getElementById("contenido");
    elem.style.backgroundColor = listaColores[indice];
    
    if(indice==listaColores.length-1){
        indice=0;
    } else indice ++;
}

setInterval(cambiar_color,1000);