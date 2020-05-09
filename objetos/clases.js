class perro {

    constructor (nombre,color,num_patas,peso,altura) {
        console.log ("Desde el constructor de ",nombre)
        this.nombre = nombre
        this.color = color
        this.num_patas = num_patas
        this.peso = peso
        this.altura = altura
    }

    saluda(){
        return "Hola soy " + this.nombre
    }
}
let snoopy = new perro("Snoopy", "Blanco con negro", 2, "9 Kg", "1 m")
let scooby = new perro("Scooby", "Cafe con negro", 4, "16 Kg", "1.5 m")
let huesos = new perro("Huesos", "Cafe", 4, "10 Kg", "1.3 m")

console.log (snoopy.color)
console.log (scooby.color)
console.log (huesos.color)

