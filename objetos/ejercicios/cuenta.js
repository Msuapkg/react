class Cuenta {
    
    constructor (titular){
        this.titular = titular
        this.cantidad = 0
    }

    ingresarCantidad (cantidad){
        let ingreso = 0
            ingreso = this.cantidad + cantidad
            if (ingreso > 900){
                console.log ('Estás excediendo el límite permitido')
            }else {
                console.log  ('Ha agregado con éxito la cantidad de: ' + ingreso) 
            }

    }
    
    retirarCantidad (cantidad){
        let retiro = 0
            retiro = this.cantidad - cantidad
            if (retiro > 10) {
                return 'No puedes dejar menos de $10'
            }else {
                return 'Ha retirado con éxito la cantidad de: ' + retiro 
            }
    }
}

let cuenta1 = new Cuenta ('Manuel Paz')

console.log (cuenta1.titular)
cuenta1.ingresarCantidad(100)
console.log (cuenta1.cantidad)
// cuenta1.retirarCantidad (200)
// console.log (cuenta1.cantidad)