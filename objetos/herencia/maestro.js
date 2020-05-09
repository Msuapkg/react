class Maestro {

    constructor (nombre, calif){
        this.nombre = nombre
        this.calif = calif
        this.promediof = 0
    }

    promedio(){
        for (let i = 0; i < this.calif.length; i++ ){
            this.promediof = this.promediof + this.calif[i]
           
        }
        return this.promediof / this.calif.length
    }

}

class MaestroFisica extends Maestro{

    constructor(nombre,calif,antiguedad) {
        super (nombre,calif)
        this.antiguedad = antiguedad
    } 
}


class MaestroMusica extends Maestro{

    constructor(nombre,calif,edad) {
        super (nombre,calif)
        this.edad = edad
    }
}


Maestro1 = new MaestroFisica ('Jose',[10,8,6,8], '10 años')


console.log(Maestro1)
