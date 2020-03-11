// JESUS ALBERTO MEDINA DZIB
var numero = 13, ran1 = 1, ran2 = 50;
for (let i = ran1; i <= ran2; i++) {
    if(numero==i){
        console.log("El numero "+numero+" esta en el rango");
        break;
    }
    if(numero!=i && i==ran2){ console.log("El numero "+numero+" no esta en el rango");}
}