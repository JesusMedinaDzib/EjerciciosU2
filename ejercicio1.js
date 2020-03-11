// JESUS ALBERTO MEDINA DZIB
var numero = 9, potencia = 2

const elevarnumeroero = function(x,n){
    var r = 1
    for(let contador = 0;contador<n;contador++){
        r *= x
    }
    resultado="Respuesta: "+r+"";
    return resultado
}

console.log(elevarnumeroero(numero,potencia))