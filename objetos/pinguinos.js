let gunter = {
    nombre : "Gunter",
    saluda: function() {
        return 'Hola soy un pingüino y mi nombre es ' + this.nombre
    }
}
console.log (gunter.saluda())

gunter.puedoVolar = false

console.log (gunter.puedoVolar)

gunter.graznar = "kaww kaww!!"

console.log (gunter.graznar)

gunter.nombre = "Señor Pingu"

console.log (gunter.saluda())

gunter.puedoVolar = true

gunter.volar = (puedoVolar) => {
    if (puedoVolar == true) {
        return 'Puedo Volar'
    }else {
        return 'No puedo volar :('
    }
}


console.log (gunter.puedoVolar)
console.log (gunter.volar(true))