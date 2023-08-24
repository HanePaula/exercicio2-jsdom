function mostraTintas(){
    var estado = document.querySelector("[data-lista]");
    if (estado.style.display === "block"){
        estado.style.display = "none";
    }
    else {
        estado.style.display = "block";
    }
}
