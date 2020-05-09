const axios = require ('axios');

function getCharacter (id){
    const url = `https://swapi.dev/api/people/${id}`

    const character = axios.get (url)

 /*    character.then((response) => {
        console.log('================= on then ================');
        console.log(response.data)
        console.log(response.status);
    }).catch((error) => {
        console.log('================= on catch ================');
        console.log(error.response.data)
        console.log(error.response.status);
    }); */

    console.log(character); 
}

function getProfile (id){
    const url = `https://swapi.dev/api/people/${id}`
    const character = axios.get (url)

    character.then ((response)=>{
        return response.data //Esta regresando otra promesa. Estoy regresando un personaje

    }).then ((personaje)=>{
        return axios.get(personaje.homeworld).then ((response)=>{
            return {...personaje,homeworld:response.data} //split object, crea una copia de un objeto
        })
    }).then ((personaje)=>{
        console.log("el personaje es: ", personaje.name);
        console.log("nació en el año: ", personaje.birth_year);
        console.log("tiene el genero: ", personaje.gender);
        console.log("su planeta es: ", personaje.homeworld.name);
    }).catch ((error)=>{
        console.log(error.response.data);
    })
}
    /* character.then ((response) => {
        const personaje = response.data
        console.log("El personaje que escogiste es: ", personaje.name);
        console.log("Nació en el año ", personaje.birth_year);
        console.log("Su género es: ", personaje.gender);
        axios.get(personaje.homeworld).then((response)=>{
            const planeta = response.data
            console.log("Su planeta es: ", planeta.name);
        }).catch ((error)=> {
            console.log(error.response.data);
        })
    })
    .catch ((error) =>{
        console.log(error.response.data);
    })
} */

getProfile (44)