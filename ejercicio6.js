// JESUS ALBERTO MEDINA DZIB
var num = 12, arreglo = [12,5,23,67,3,90,1,3,445,23,4]; 
function verificar(num){
    for (i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == num){
            return true;
        }
    }
}
if(verificar(num)){
    console.log(true);
}else{
    console.log(false);
}