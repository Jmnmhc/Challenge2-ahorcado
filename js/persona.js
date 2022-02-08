
function baseHorca (x, y){
    var inicioX = x-200;
    var inicioY = y+350;
    
    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX-50, inicioY+25);
    pincel.lineTo(inicioX+50, inicioY+25);
    pincel.fill();

};

function dibujarVertical(x, y){
    var inicioX = x-200;
    var inicioY = y-145;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX, inicioY+500);
    pincel.stroke();
};

function dibujarHorizontal(x, y){
    var inicioX = x;
    var inicioY = y-145;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX-200, inicioY);
    pincel.stroke();

};

function dibujarSoga(x, y){
    var inicioX = x;
    var inicioY = y-45;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX, inicioY-100);
    pincel.stroke();

};

function dibujarCabeza(x, y){
    var inicioX = x;
    var inicioY = y;

    pincel.lineWidth=5;
    pincel.fillStyle = "black";   
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.arc(inicioX,inicioY,50,0,2*3.14);
    pincel.fill();

    pincel.fillStyle = "white";   
    pincel.beginPath();
    pincel.arc(inicioX,inicioY,45,0,2*3.14);
    pincel.fill();

};

function dibujarTronco(x, y){
    var inicioX = x;
    var inicioY = y+45;
    
    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX, inicioY+155);
    pincel.stroke();
  
};

function dibujarPiernaDerecha(x, y){
    var inicioX = x;
    var inicioY = y+200;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX+75, inicioY+75);
    pincel.stroke();

};

function dibujarPiernaIzquierda(x, y){
    var inicioX = x;
    var inicioY = y+200;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX-75, inicioY+75);
    pincel.stroke();
};

function dibujarBrazoDerecho(x, y){
    var inicioX = x;
    var inicioY = y+100;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX+75, inicioY-75);
    pincel.stroke();
};

function dibujarBrazoIzquierdo(x, y){
    var inicioX = x;
    var inicioY = y+100;

    dibujarLineas (inicioX, inicioY)  
    pincel.lineTo(inicioX-75, inicioY-75);
    pincel.stroke();
};

function dibujarTexto(texto, x, y){
    var inicioX = x+75;         //el punto mas a la derecha del brazo
    var inicioY = y+375;        //es el punto mas bajo de la base
    var palabra = texto;        //la palabra aleatoria recibida como parametro
	var maximo = 1200-inicioX;   //1200 es el limite del canvas, asi que el punto maximo del texto es el 
                                //total del canvas menos el punto de inicio

    pincel.lineWidth=1;
    pincel.fillStyle='black';
    pincel.strokeStyle = "black";
                            
    pincel.font="30pt Arial";   //fuente y tamaño
    pincel.fillText(palabra,inicioX, inicioY,maximo);
    pincel.strokeText(palabra, inicioX, inicioY,maximo);
    
   // console.log(palabra);
}

function juegoPerdido(x, y){
    var inicioX = x+100;         //el punto mas a la derecha del brazo
    var inicioY = y+175;        //es el punto mas bajo de la base
    var frase = "juego perdido";

    pincel.lineWidth=1;

    pincel.strokeStyle = "red";
    pincel.fillStyle ="red";
    pincel.font = "25pt Arial";   
    pincel.fillText(frase, inicioX, inicioY, 1200-inicioX);
    pincel.strokeText(frase, inicioX, inicioY, 1200-inicioX);

}

function juegoGanado(x, y){
    var inicioX = x+100;         //el punto mas a la derecha del brazo
    var inicioY = y+175;        //es el punto mas bajo de la base
    var frase = "juego ganado!!!";

    pincel.lineWidth=1;

    pincel.strokeStyle = "green";
    pincel.fillStyle ="green";
    pincel.font = "25pt Arial";   
    pincel.fillText(frase, inicioX, inicioY, 1200-inicioX);
    pincel.strokeText(frase, inicioX, inicioY, 1200-inicioX);

}

function mostrarErradas(letras, x, y){
    
    var inicioX = x+100;         //el punto mas a la derecha del brazo
    var inicioY = y+275;        //es el punto mas bajo de la base
    var frase = letras;

    pincel.lineWidth=1;

    pincel.strokeStyle = "black";
    pincel.fillStyle ="black";
    pincel.font = "25pt Arial";   
    pincel.fillText(frase, inicioX, inicioY, 1200-inicioX);
    pincel.strokeText(frase, inicioX, inicioY, 1200-inicioX);

}

function dibujarLineas (coordenadaX, coordenadaY){
    pincel.lineWidth=5;
    pincel.fillStyle='black';
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(coordenadaX, coordenadaY);

}

function dibujarAciertos(texto, x, y){
    var inicioX = x+75;         //el punto mas a la derecha del brazo
    var inicioY = y+370;        //es el punto mas bajo de la base
    var palabra = texto;        //la palabra aleatoria recibida como parametro
	var maximo = 1200-inicioX;   //1200 es el limite del canvas, asi que el punto maximo del texto es el 
                                //total del canvas menos el punto de inicio

    pincel.lineWidth=1;
    pincel.fillStyle='black';
    pincel.strokeStyle = "black";
                            
    pincel.font="25pt Arial";   //fuente y tamaño
    pincel.fillText(palabra,inicioX, inicioY,maximo);
    pincel.strokeText(palabra, inicioX, inicioY,maximo);
    
}

function refrescarLienzo(split, x, y){
    pincel.fillStyle = "lightgrey";
    pincel.fillRect (0, 0, 800, 1200);
    pincel.lineWidth=5;
    pincel.fillStyle='black';
    pincel.strokeStyle = "black";

    baseHorca(x, y);

    dibujarTexto(palabraSecreta(split), x, y);
    

};