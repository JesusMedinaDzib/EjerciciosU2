// JESUS ALBERTO MEDINA DZIB

var r = 89800
function horas(r) {
    return Math.floor(r/3600)
}
function minutos(r) {
    return Math.floor((r%3600)/60)
}
function segundos(r) {
    return (r%60)
}
console.log("Numero ingresado "+r)
console.log("- - - - - - - - - - - -")
console.log("Horas: "+horas(r))
console.log("- - - - - - - - - - - -")
console.log("Minutos: "+minutos(r))
console.log("- - - - - - - - - - - -")
console.log("Segundos: "+segundos(r))

