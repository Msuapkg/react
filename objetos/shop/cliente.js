class cliente {

    constructor (id, nombre, edad, genero, email, tel){
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.email = email
        this.tel = tel
        this.carrito = []
        this.suscrito = false
    }

    agregarCarrito(producto) {
        this.carrito.push (producto)
    }

    comprar (){
        let total = 0
        for(let i = 0; i < this.carrito.length; i++){
            console.log('Estas comprando '+this.carrito[i].getNombre()+" por "+ this.carrito[i].getPrecio())
            total = total + this. carrito [i].getPrecio()
        }
        return "El total de tu compra es: " + total
    }

    suscribirse(){
        if(this.suscrito){
            return 'El cliente ya está suscrito'
        }else {
            return 'El cliente se suscribió correctamente'
        }
    }
}

module.exports = cliente; //La clase cliente se puede compartir en otros archivos


