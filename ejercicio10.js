// JESUS ALBERTO MEDINA DZIB

var lista = [2,4,8,2,4,5,10,20,30];
var listaPares = [];
var i = 0;

function determinarPares(entrada) {
    if (entrada == 0) {
        return true;
    }
    else {
        return determinarImpares(entrada - 1);
    }
}

function determinarImpares(entrada) {
    if (entrada == 0) 
    {
        return false;
    }
    else{ 
        return determinarPares(entrada - 1);
    }
}

for(var INICIO = 0;INICIO < lista.length;INICIO++) {
    if(determinarPares(lista[INICIO])==true) listaPares[INICIO] = lista[INICIO]
}

do {
    if(listaPares[i] == undefined) listaPares.splice(i,1)
    console.log(listaPares[i])
    i++
} while(i<listaPares.length)