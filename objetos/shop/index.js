const cliente = require ('./cliente')
const Producto = require ('./producto')

let ipad = new Producto ('Ipad 16gb', 7000)
let iphone = new Producto ('Iphone X Max', 60000)

let cliente1 = new cliente (1, "Manuel", 27, "M", "msuapkg@gmail.com", "5548086467")


cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())

let computadora = new Producto ('Computadora Gamer', 70000)
let celular = new Producto ('Samsung Galaxy S20', 30000)
let play = new Producto ('Play Station 4', 10000)

console.log (computadora.getNombre())
computadora.setNombre ("Otra computadora que no es gamer") 
console.log (computadora.getNombre())

let cliente2 = new cliente ('2', 'Luis Torres', 35, 'M', 'luit@gmail.com','55440000')

cliente2.agregarCarrito (computadora)
cliente2.comprar()