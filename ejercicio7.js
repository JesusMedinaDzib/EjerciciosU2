// JESUS ALBERTO MEDINA DZIB

var arreglo =[12,13,14,15,16,18,17,19];
var valor = true, i = 0;
do {
    if(arreglo[i]<arreglo[i+1]) 
    {
        valorV=true;
    }else{ 
        valor=false;
    }
    i++;
} while(i<arreglo.length-1);

resultado = valorV && valor;
if(resultado) {
    console.log(resultado);
}else {
    console.log("lista no ordenada");
    console.log(resultado);
}
