/* Crear la clase construcción que hereda a otras dos
    clases "casa" y "edificio".
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia */

class Construccion {
    
    constructor (numPuertas,numVentanas,largo,ancho,direccion){
        this._numPuertas = numPuertas
        this._numVentanas = numVentanas
        this._largo = largo
        this._ancho = ancho
        this._direccion = direccion
    }

    m2 (){
        let cuadrados
        cuadrados = this._ancho * this._largo
         return `El terreno es de: ${cuadrados} metros cuadrados`
    }
    
    getDireccion (){
        return this.direccion
    }

    setDireccion (nuevaDireccion){
        this.direccion = nuevaDireccion
    }
}


module.exports = Construccion