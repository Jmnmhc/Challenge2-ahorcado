var listaPalabras = ["CARAVANA", "ANUNCIO", "PROBLEMAS", "CIRCULAR", "ORGANIZACION", "COLORANTE", "PALETA", "VACACIONES"];
var palabraElegida = randomPalabras();
var split = palabraElegida.split('');


var cantidad = split.length


console.log(split);

var teclasPresionadas = [];                         //en este array vacio van a ir las teclas presionadas
var letrasErradas = [];
var letrasAcertadas = [];
var errores = 0;
var pulsada = false;
var juegoTerminado = false;

document.addEventListener("keypress", (evento) => {              //leo la tecla presionada
if (!juegoTerminado){    
    var huboAcierto = false;                                     //Booleanos de control 
    var estaba = true;
    var esValida = false;     
    var ingresoActual = evento.key;                             //paso a variable la tecla presionada

    pulsada = true;    

    console.log("cantidad de teclas presionadas " + teclasPresionadas.length);

//PRIMERO EVALUO QUE LAS LETRAS SEAN MAYUSCULAS, CASO CONTRARIO AVISO CON UN ALERT
//EN EL IF DE ADENTRO, EN PRINCIPIO HAGO UNA NUEVA CADENA, CONTENIENDO LAS LETRAS INGRESADAS
//CON ESAS LETRAS PUEDO COMPARAR LUEGO SI CORRESPONDEN A LAS BUSCADAS

    if ((evento.charCode >64 && evento.charCode < 91) || evento.charCode == 209){
        esValida=true;
        if (teclasPresionadas.length == 0) {                        //si no hay letras previas, ingresa la primera
            teclasPresionadas = teclasPresionadas + ingresoActual;

           for(var i = 0; i < split.length; i++){

                    if (split[i] == ingresoActual){
                        huboAcierto = true;
                        letrasAcertadas[i] = ingresoActual;
                        refrescarLienzo(cantidad, x, y);
                        dibujarAhorcado(errores, x, y, pulsada);
                        mostrarErradas(letrasErradas, x, y);
        
                    };
                };


        }else{                                                      //al haber letras previas, controla
            for (var i = 0; i < teclasPresionadas.length; i++){     //loop para recorrer el array de letras
                if (teclasPresionadas[i] == ingresoActual){            //realizo la busqueda de coincidencias letra por letras 
                    alert("error, la tecla "+ teclasPresionadas[i] + " ya había sido elegida");//aviso si ya la habian ingresado
                    estaba=true;                                    //modifico la variable de control a VERDADERO
                    esValida = false;
                    break;                                          //escapo del loop

                }else{                                              //si no entro al IF, es porque no estaba la letra
                    estaba=false;                                   //entonces modifico a FALSO el control
                    console.log("entro al segundo else");
                };
            };

        };
    }else{alert("error, solamente se aceptan letras mayúsculas (incluída la Ñ)")}

    if (!estaba){                                           //si el contron es FALSO es porque la letra no estaba previamente
        teclasPresionadas = teclasPresionadas + ingresoActual; //entonces la agrego a la lista de letras
        
        
        for(var i = 0; i < split.length; i++){

            if (split[i] == ingresoActual){
                huboAcierto = true;
                letrasAcertadas[i] = ingresoActual;
                refrescarLienzo(cantidad, x, y);
                dibujarAhorcado(errores, x, y, pulsada);
                mostrarErradas(letrasErradas, x, y);

            };
        };
     };

    if (!huboAcierto && esValida){
        errores++;
        letrasErradas.push(ingresoActual);
        dibujarAhorcado(errores, x, y, pulsada);
        mostrarErradas(letrasErradas, x, y);        

    };
        var cadenaAcertadas = "";
        var cadenaControlCierre = "";
        for (i=0; i<letrasAcertadas.length;i++){
            
            cadenaAcertadas = cadenaAcertadas + letrasAcertadas[i] + " ";
            cadenaControlCierre = cadenaControlCierre + letrasAcertadas[i];
            
            if (letrasAcertadas[i] != "I"){
                var incrementoDeX = x + 35*i
            }else{var incrementoDeX = x + (35*i) +9}
            dibujarAciertos(letrasAcertadas[i], incrementoDeX, y)
        }
        palabraSecreta(split, letrasAcertadas);

        if (palabraElegida == cadenaControlCierre){
            juegoGanado(x, y);
            juegoTerminado = true;    //VARIABLE DE CONTROL DE JUEGO ACTIVO
            
        }  
    }
    });

function palabraSecreta (palabra){  
var palabraEnmascarada = ""
    for (var i = 0; i < palabra.length; i++){
        palabraEnmascarada = palabraEnmascarada + "_ ";
    };

return (palabraEnmascarada);  //devuelvo la palabra enmascarada (el mismo length que la recibida)
};

//con esta funcion puedo elegir las palabras al azar, la devuelvo llamando a "randomPalabras"
function randomPalabras (){
    var palabraAlAzar = listaPalabras[Math.floor(Math.random()*listaPalabras.length)];
    return palabraAlAzar;    
};

function ingresaAciertos (split, ingresoActual){

    for(var i = 0; i < split.length; i++){

        if (split[i] == ingresoActual){
            letrasAcertadas[i] = ingresoActual;
            refrescarLienzo(cantidad, x, y);
            dibujarAhorcado(errores, x, y, pulsada);
            mostrarErradas(letrasErradas, x, y);

        };
    };

}