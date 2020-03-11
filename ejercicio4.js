// JESUS ALBERTO MEDINA DZIB

var rango = [12,55,3,78], res = rango[0];
for (contador = 0; contador < rango.length; contador++) 
{
    if(res < rango[contador])
    {
        res = rango[contador];
    }
}
console.log(""+res+" es el numero mayor");