// JESUS ALBERTO MEDINA DZIB
function recursiva(entrada) {
    if(entrada == 1) 
    {
        return entrada
    }
    else 
    {
        return (2 + recursiva(entrada - 1))
    }
}

for(i = 1;i <= 7;i++)
{
    console.log(recursiva(i))
}