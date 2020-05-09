let datos = [
    {'name':'Manuel','age': 27, 'city': 'CDMX'},
    {'name':'Liz','age': 22, 'city': 'Michoacan'},
    {'name':'Yunuen','age': 2, 'city': 'Chiapas'}
]

function getUsuarios(call){
    setTimeout (function (){
        call (datos)
    },2000)
}

console.log('Bienvenido, obteniendo datos');

getUsuarios(function(datos){
    console.log(datos);
    console.log('Usuarios recibidos');
})

console.log('Cargando.........')


function saludo (callback){
    console.log('Saludos desde la función')
    callback ()
}

function despedida (){
    console.log('Adiós desde el callback')
}

saludo(despedida)

saludo (function(){
    console.log('Desde una función anónima');
})