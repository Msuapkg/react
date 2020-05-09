const request = require ('request')     //callback hell ===== procurar no hacer esto

/* function getPeopleBad (error, response, body){     //callback
    console.log(response.statusCode);           //200
    const data = JSON.parse (body);

    const personajes = data.results.map((personaje)=>{
        request (personaje.homeworld, function (error, response, body){
            const planeta = JSON.parse (body)
            const naves = []
            for (const naveURL of personaje.starships) {
                request (naveURL, function (error, response, body){
                    const nave = JSON.parse (body)
                    console.log("El personaje es: " + personaje.name);
                    console.log("Su planeta es: " + planeta.name);
                    console.log("Esta es una vez de sus naves: " + nave.name);
                })
                
            }

        })
        
    })


    /* for (const person of data.results){
        console.log(`El nombre del personaje es ${person.name}`);
        request (person.homeworld,getPlanet) //se ejecuta 10 veces
    } */
//} 

 
function getPeople (error, response, body) {
    const data = JSON.parse (body)
    //map, filter & find
    const personajesMap = data.results.map ((personaje) =>{
        return `El personaje ${personaje.name} tiene un peso de ${personaje.mass} Kg`
    })

    // console.log(personajesMap);

    const personajesFilter = data.results.filter ( (personaje) =>{
        return personaje.gender === 'n/a' //asecion lógica
    })

    const personajesFind = data.results.find ( (personaje) =>{
        return personaje.birth_year === '57BBY'  //asecion lógica
    })
    
    const imcPersonajes = data.results.map ( (personaje) => {
        return {nombre: personaje.name, imc: (personaje.mass) / (personaje.height/100)**2}
    }).filter ((personaje)=> personaje.imc > 30)

    //console.log(imcPersonajes);
}

//request ('http://swapi.dev/api/people/',getPeople) //se ejecuta 1 vez


