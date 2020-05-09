const Construccion = require ('./construccion')

class Casa extends Construccion {

    constructor (numPuertas,numVentanas,largo,ancho,direccion){
    super (numPuertas,numVentanas,largo,ancho,direccion)
    }
}

module.exports = Casa