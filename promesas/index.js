function login (email,password){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            //simulacion de la ida de datos al servidor
            const mail = 'msuapkg@gmail.com'
            const pass = 'hola.1'

            if (email === mail && password === pass){
                resolve ('Te has registrado con éxito')
            }else {
                const error = new Error ('Tu password o email son inválidos')
                reject (error)
            }

        },1000)
    })

}

login('msuapkg@gmail.com','hola.1')
    .then ((mensaje)=> console.log(mensaje)) //La promesa se ejecutó de manera correcta
    .catch ((error)=> console.log(error.message)) //La promesa no se ejecutó de manera correcta