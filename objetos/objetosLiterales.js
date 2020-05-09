let huesos = {
    num_ojos: 2,
    color: 'cafe',
    num_patas: 4,
    altura: '1m',
    peso: '3kg',
    ladra: () => {
        return 'Guau Guau'
    },
    olfatea: (objeto) => {
        return 'Huesos esta olfateando ' + objeto
    },
    comer : (comida) => {
        if (comida == 'carne'){
            return 'Huesos está contento'
        }else {
            return 'Huesos ya no te quiere :('
        }
    } 
};

console.log (huesos.ladra ())
console.log (huesos.olfatea ('otro perro'))
console.log (huesos.comer ('pescadito'))

let snoopy = {
    num_ojos: 2,
    color: 'blanco',
    num_patas: 2,
    altura: '1m',
    peso: '5kg'
};

console.log ("Huesos pesa: ", huesos.peso)
console.log ("Snoopy pesa: ", snoopy.peso)

snoopy.amigo = "Charly Brown"
snoopy.baila = () => {
    return 'Snoopy está bailando'
}
snoopy.color = 'blanco con manchas blancas'

console.log (snoopy.baila())

console.log ("El amigo de Huesos es: ", huesos.amigo)
console.log ("El amigo de Snoopy es: ", snoopy.amigo)

let scooby = {
    nombre: "Scooby Doo",
    saluda: function() {
        return 'Hola soy ' + this.nombre
    }
}

console.log (scooby.saluda())