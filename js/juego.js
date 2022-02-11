var listaPalabras = ["CARAVANA", "ANUNCIO", "PROBLEMAS", "CIRCULAR", "ORGANIZACION", "COLORANTE", "PALETA", "VACACIONES"];
var palabraElegida = randomPalabras();
var split = palabraElegida.split('');
var cantidad = split.length
var teclasPresionadas = [];
var letrasErradas = [];
var letrasAcertadas = [];
var errores = 0;
var pulsada = false;
var juegoTerminado = false;

document.addEventListener("keypress", (evento) => {
if (!juegoTerminado){    
    var huboAcierto = false;
    var estaba = true;
    var esValida = false;     
    var ingresoActual = evento.key;

    pulsada = true;    

    if ((evento.charCode >64 && evento.charCode < 91) || evento.charCode == 209){
        esValida=true;
        if (teclasPresionadas.length == 0) {
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

        }else{
            for (var i = 0; i < teclasPresionadas.length; i++){
                if (teclasPresionadas[i] == ingresoActual){
                    alert("error, la tecla "+ teclasPresionadas[i] + " ya había sido elegida");
                    estaba=true;
                    esValida = false;
                    break;

                }else{
                    estaba=false;
                    console.log("entro al segundo else");
                };
            };

        };
    }else{alert("error, solamente se aceptan letras mayúsculas (incluída la Ñ)")}

    if (!estaba){
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
            juegoTerminado = true;
        }  
    }
    });

function palabraSecreta (palabra){  
var palabraEnmascarada = ""
    for (var i = 0; i < palabra.length; i++){
        palabraEnmascarada = palabraEnmascarada + "_ ";
    };

return (palabraEnmascarada);
};

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