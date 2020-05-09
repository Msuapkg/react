class persona {

    constructor (primerNombre, segundoNombre, primerApellido, segundoApellido, fechaDeNacimiento, edad, sexo, peso, altura){
        this.primerNombre = primerNombre
        this.segundoNombre = segundoNombre
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.fechaDeNacimiento = fechaDeNacimiento
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularRFC (){
        return 'RFC: ' + this.primerApellido.substring (0,2) + this.segundoApellido.substring (0,1) + this.primerNombre.substring (0,1) + this.fechaDeNacimiento + 'X0X'
    }

    calcularIMC (){
        return 'IMC '+ this.peso / Math.pow(this.altura, 2)
    }
}

let persona1 = new persona ('Manuel','Uriel','Paz','Gonzalez', '930131', 27, 'M', 54, 1.56)

console.log (persona1)
console.log (persona1.calcularIMC())
console.log (persona1.calcularRFC())