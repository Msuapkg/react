/* 2.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100 */

class Electrodomestico {

    constructor (nombre,precio,color){
        this.nombre = nombre
        this.precio = precio
        this.color = color
        this.consumoEnergetico = 100
    }

}

class Lavadora extends Electrodomestico {

    constructor(nombre,precio,color,carga) {
        super(nombre,precio,color)
        this.carga = carga
    }

    consumoEne (carga){
        let total 
        total = this.consumoEnergetico * carga

        return `El consumo energético total de la Lavadora ${this.nombre} es de: ${total}`
    }
}

let Mabe = new Lavadora ('Mabe', 5000, 'blanca', 25)

console.log(Mabe);
console.log(Mabe.consumoEne(25));