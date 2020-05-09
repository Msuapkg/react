const request = require ('request')

function atrapar(error, response, body){ //Este es mi callback
    console.log(response.statusCode); //200
    const data = JSON.parse(body) //convierte json en un objeto de javascript
    /* for (let i = 0; i < data.results.length; i++){
        console.log(data.results[i].name);
    } */
    data.results.map((person)=>{
        console.log(person.name);
    })

    console.log("============Segundo For ====================");
    for (const person of data.results){
        console.log(person.name);
    }
}

/* const atrapar2 = (error, response, body) => {
    console.log(response.statusCode); //200
    console.log(body);
} */

request ('https://swapi.dev/api/people/', atrapar)