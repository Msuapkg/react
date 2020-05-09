const Construccion = require ('./construccion')

class Edificio extends Construccion{

    constructor (numPuertas,numVentanas,largo,ancho,numPisos,altura,direccion){
        super (numPuertas,numVentanas,largo,ancho,direccion)
        this.numPisos = numPisos
        this.altura = altura
    }
}

module.exports = Edificio