var listaPalabras = ["CARAVANA", "ANUNCIO", "PROBLEMAS", "CIRCULAR", "ORGANIZACION", "COLORANTE", "PALETA", "VACACIONES"];
var cantidadPalabras = listaPalabras.length -1;
var elegida = random(0,cantidadPalabras);

console.log("la variable elegida es"+ elegida);

console.log(listaPalabras[elegida]);

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
