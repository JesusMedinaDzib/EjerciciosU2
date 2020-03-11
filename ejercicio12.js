// JESUS ALBERTO MEDINA DZIB

function mapaDeDatos(){
    mapaDatos = new Map()
    mapaDatos.set(1,"Yucatan")
    mapaDatos.set(2,"Sinaloa")
    mapaDatos.set(3,"Guanaguato")
    mapaDatos.set(4,"Veracruz")
    mapaDatos.set(5,"Monterrey")
    mapaDatos.set(6,"San Luis Potosi")
    mapaDatos.set(7,"Quintana Roo")
    mapaDatos.set(8,"Campeche")
    mapaDatos.set(9,"Tabasco")
    mapaDatos.set(10,"DF")
    mapaDatos.set(11,"Baja califormia sur")
    mapaDatos.set(12,"Baja califormia norte")
    mapaDatos.set(13,"Nayarit")
    return mapaDatos;
}
estado = mapaDeDatos()
clave = 4;
console.log("CLAVE: "+clave);
console.log("Dato relacionado con: "+estado.get(clave));

