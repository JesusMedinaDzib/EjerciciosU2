// JESUS ALBERTO MEDINA DZIB

var listaUno = [1,2,3,4,5,6,7,8];
var listaDos = [1,2,3,4,5,6,7,8];
var valorDos = true, i = 0;
do {
if (listaUno[i] == listaDos[i]) 
{valor = true;}
else {valorDos = false;}
i++;
} while(i < listaUno.length || i < listaDos.length)
resultado = valor && valorDos;
if(resultado) {
    // true
    console.log(resultado);
}else {
    // false
    console.log(resultado);
}