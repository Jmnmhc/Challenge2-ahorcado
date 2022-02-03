var pantalla = document.querySelector("#ahorcado"); //capturo el canvas
var pincel = pantalla.getContext("2d");
var empezar = document.querySelector("#iniciar-juego");

empezar.addEventListener("click",function(event){
    var x = 300;
    var y = 200;


    pincel.fillStyle = "lightgrey";
    pincel.fillRect (0, 0, 800, 1200);
    pincel.lineWidth=5;

    baseHorca(x, y);

    dibujarVertical(x, y);
    
    dibujarHorizontal(x, y);
    
    dibujarSoga(x, y);
    
    dibujarCabeza(x, y);
    
    dibujarTronco(x, y);
    
    dibujarPiernaDerecha(x, y);
    
    dibujarPiernaIzquierda(x, y);
    
    dibujarBrazoDerecho(x, y);
    
    dibujarBrazoIzquierdo(x, y);
 
});
