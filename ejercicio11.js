// JESUS ALBERTO MEDINA DZIB
var arregloUno = new Set(["Sandias","Melon","Pera","Ciruela"])
var arregloDos = new Set(["Ciruela","Sandias","Mango","Mora"])

function definirUnion(arregloUno,arregloDos) {
    var union = new Set([...arregloUno, ...arregloDos])
    return union;
}

function defInterseccion(arregloUno,arregloDos) {
    let interseccion = new Set([...arregloUno].filter(x => arregloDos.has(x)));
    return interseccion;
}

function definirDiferencia(arregloUno,arregloDos) {
    let difference = new Set([...arregloUno].filter(x => !arregloDos.has(x)));
    return difference;
}
console.log(definirDiferencia(arregloUno,arregloDos));
console.log(defInterseccion(arregloUno,arregloDos));
console.log(definirUnion(arregloUno,arregloDos));