const x = 300;
const y = 200;

var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
var empezar = document.querySelector("#iniciar-juego");

empezar.addEventListener("click",function(event){
 
    juegoTerminado = false;
    pulsada = false;
    errores = 0;
    cadenaAcertadas = "";
    cadenaControlCierre = "";
    letrasAcertadas=[];
    palabraElegida = randomPalabras();
    split = palabraElegida.split('');    
    teclasPresionadas = []; 
    letrasErradas = [];
    console.log(split);
    cantidad = split.length

    for (var i = 0; i < split.length; i++){
        letrasAcertadas[i] = "  ";

    };

    refrescarLienzo(cantidad, x, y);
        
});

function dibujarAhorcado (errores,x,y, pulsada){

    if (errores == 1 && pulsada){
        dibujarVertical(x, y);
        pulsada = false;
    }
    
    if (errores == 2 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        pulsada = false;
    } 
    
    if (errores == 3 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
        pulsada = false;
    }    
    
    if (errores == 4 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
       pulsada = false;
    }
    
    if (errores == 5 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
        dibujarTronco(x, y);
        pulsada = false;
    }
    
    if (errores == 6 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
        dibujarTronco(x, y);
        dibujarPiernaDerecha(x, y);
        pulsada = false;
    }
    
    if (errores == 7 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
        dibujarTronco(x, y);
        dibujarPiernaDerecha(x, y);
        dibujarPiernaIzquierda(x, y);
        pulsada = false;
    }
    
    if (errores == 8 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
        dibujarTronco(x, y);
        dibujarPiernaDerecha(x, y);
        dibujarPiernaIzquierda(x, y);
        dibujarBrazoDerecho(x, y);
        pulsada = false;
    }
    
    if (errores == 9 && pulsada){
        dibujarVertical(x, y);
        dibujarHorizontal(x, y);
        dibujarSoga(x, y);
       dibujarCabeza(x, y);
        dibujarTronco(x, y);
        dibujarPiernaDerecha(x, y);
        dibujarPiernaIzquierda(x, y);
        dibujarBrazoDerecho(x, y);
        dibujarBrazoIzquierdo(x, y);
        pulsada = false;
        juegoTerminado = true;
        juegoPerdido(x, y);
    }
}
