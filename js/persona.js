
function baseHorca (x, y){
    var inicioX = x-200;
    var inicioY = y+350;

    pincel.fillStyle='black';
    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX-50, inicioY+25);
    pincel.lineTo(inicioX+50, inicioY+25);
    pincel.fill();

};

function dibujarVertical(x, y){
    var inicioX = x-200;
    var inicioY = y-145;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX, inicioY+500);
    pincel.stroke();
};

function dibujarHorizontal(x, y){
    var inicioX = x;
    var inicioY = y-145;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX-200, inicioY);
    pincel.stroke();

};

function dibujarSoga(x, y){
    var inicioX = x;
    var inicioY = y-45;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX, inicioY-100);
    pincel.stroke();

};

function dibujarCabeza(x, y){
    var inicioX = x;
    var inicioY = y;

    pincel.beginPath(inicioX, inicioY);
    pincel.fillStyle = "black";   
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

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX, inicioY+155);
    pincel.stroke();
  
};

function dibujarPiernaDerecha(x, y){
    var inicioX = x;
    var inicioY = y+200;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX+75, inicioY+75);
    pincel.stroke();

};

function dibujarPiernaIzquierda(x, y){
    var inicioX = x;
    var inicioY = y+200;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX-75, inicioY+75);
    pincel.stroke();
};

function dibujarBrazoDerecho(x, y){
    var inicioX = x;
    var inicioY = y+100;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX+75, inicioY-75);
    pincel.stroke();
};

function dibujarBrazoIzquierdo(x, y){
    var inicioX = x;
    var inicioY = y+100;

    pincel.beginPath();
    pincel.moveTo(inicioX, inicioY);
    pincel.lineTo(inicioX-75, inicioY-75);
    pincel.stroke();
};



