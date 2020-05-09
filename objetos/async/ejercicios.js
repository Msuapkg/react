// 1.- Muestra un mensaje en consola mediante un callback

function mensaje1 (callback) {
    callback ()
}

mensaje1(function (){
    console.log("Ejercicio1 - Mostrando mensaje en consola mediante un callback");
})

console.log('-----------------------');

/* 2.- Crear una función de orden superior que reciba como
    argumento un mensaje y callback. Según el callback que
    se pase como argumento, la función de orden superior
    debe mostrar el mensaje en un console.warn o en un console.log */

function mensaje2 (mensaje, callback){
    callback (mensaje)
}

function respuestaclg (mensaje){
    console.log(mensaje);
}

function respuestaclw (mensaje){
    console.warn (mensaje)
}

mensaje2('Ejercicio 2 - Mostrando mensaje mediante callback en console.log',respuestaclg)
mensaje2('Ejercicio 2 - Mostrando mensaje mediante callback en console.warn',respuestaclw)

console.log('---------------------------------');

/* 3.- Crear una función de orden superior que reciba como
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números. */

function operacion (a, b, callback){
    callback (a,b)
}

function suma (a,b){
    let totals = a + b
    console.log(`La suma de ${a} + ${b} es igual a ${totals}`);
}

function resta (a,b){
    let totalr = a - b
    console.log(`La resta de ${a} - ${b} es igual a ${totalr}` );
}

function multip (a, b){
    let totalm = a * b
    console.log(`La multiplicación de ${a} * ${b} es igual a ${totalm}` );
}

operacion (10, 5, suma)
operacion (10, 5, resta)
operacion (10, 5, multip)

console.log('---------------------------');

/* 4.- Escribe una funcion de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayusculas o en minusculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELAGARTO */

function cambiar (texto, callback){
    callback (texto)
}

function mayus (texto){
    let textmayus = texto.toUpperCase ()
    console.log(textmayus);
}

function minus (texto){
    let textminus = texto.toLowerCase ()
    console.log(textminus);
}

cambiar ('Ejercicio 4 - Cambiar a mayusculas', mayus)
cambiar ('Ejercicio 4 - Cambiar a minusculas', minus)

console.log('----------------------');

/* 5.Hacer un arreglo de 4 cantidades de tiempo en minutos
    EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas)
    mediante un callback */

function tiempo (callback,horarios){
    return callback (horarios)
}

function comparacion (horarios){
    let newHorarios = []
    for (i=0; i < horarios.length; i++){
        if (horarios[i] >= 120)[
            newHorarios.push (horarios[i])
        ]
    }
    return newHorarios
}

console.log(tiempo (comparacion, [120,240,60,12,180,20]))

