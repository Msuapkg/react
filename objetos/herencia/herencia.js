class Mascota{

    constructor (nombre,color){
        this.nombre = nombre
        this.color = color
    }

    comer (alimento){
        return `${this.nombre} Está comiendo ${alimento}` //Interpolación
    }

    saludar (){
        return `Hola soy ${this.nombre} , te saludo humano`
    }
}

class Perro extends Mascota{

    constructor (nombre, color, patas, raza, peso){
        super (nombre,color)
        this.patas = patas
        this.raza = raza
        this.peso = peso
    }

}

let huesos = new Perro ('Huesos', 'cafe', 4, 'galgo', '5Kg')

console.log (huesos.nombre)
console.log (huesos.raza)
console.log (huesos.comer ('carnita'))

class Pez extends Mascota {

    constructor (nombre, color, tipoPecera, tipoAgua, cantidadAlimento){
        super (nombre, color)
        this.tipoPecera = tipoPecera
        this.tipoAgua = tipoAgua
        this.cantidadAlimento = cantidadAlimento
    }

    nadar(){
        return `${this.nombre} Está nadando feliz en su pecera ${this.tipoPecera}` 
    }

    saludar (){
        return 'glug glug'
    }
}

let nemo = new Pez ('Nemo', 'naranja', 'Cristal templado', 'Salada', '2g')

console.log(nemo.nombre)
console.log(nemo.comer('Alimento Especial'))
console.log (nemo.nadar())
console.log(huesos.saludar());
console.log(nemo.saludar());