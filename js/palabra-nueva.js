var textoIngresado = document.querySelector("#input-nueva-palabra");
var botonNuevaPalabra = document.querySelector("#nueva-palabra");
var palabraAgregada = "";
var puedeAgregarse = false;

botonNuevaPalabra.addEventListener("click",function(evento){
    evento.preventDefault();
    palabraAgregada = textoIngresado.value;

   if (juegoTerminado = true ){     
        if (validarTexto(textoIngresado)){
                for (var i = 0; i < listaPalabras.length; i++){
                    if (listaPalabras[i] == palabraAgregada){
                        alert("la palabra "+ "'"+ palabraAgregada+"' "+"ya se encuentra listada");
                        puedeAgregarse = false;
                        break
                    }else{
                        puedeAgregarse = true;                      
                    }
                    
                }
                if (puedeAgregarse){
                listaPalabras.push(palabraAgregada);
                alert("se agrego la correctamente la palabra: " + palabraAgregada);
                }

            }else{alert("recuerde que solo puede ingresar palabras con letras mayusculas (incluyendo la Ñ) pero sin caracteres especiales")}
        }
        textoIngresado.value = "";

});

function validarTexto(texto){
    var reglaValidacion = new RegExp("[a-z/0-9/ÁÉÍÚÓ]","g");
    var ingresado = texto.value;

    if (ingresado==""){
        alert("Ingrese la palabra deseada");
        return false;
    }
    else{
        if (!reglaValidacion.test(ingresado)){
            return true;
        }
        else{
            //alert("No se pueden ingresar numeros ni acentos");
            return false;
        }
    }

}