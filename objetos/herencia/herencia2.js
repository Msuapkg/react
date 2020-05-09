class Largometraje {

    constructor (titulo, duracion){
        this.titulo = titulo
        this.duracion = duracion
    }

}

class Pelicula extends Largometraje {

        constructor (titulo, duracion, genero, clasificacion){
        super(titulo, duracion)
        this.genero = genero
        this.clasificacion = clasificacion
        }
}

class Documental extends Largometraje {

        constructor (titulo, duracion, patrocinador, pais){
            super (titulo, duracion)
            this.patrocinador = patrocinador
            this.pais = pais
        }
}

class Cine {

        constructor (nombre){
            this.nombre = nombre
        }

        reproducir (Largometraje){
            return `Reproduciendo: ${Largometraje.titulo}`
        }
        // reproducirPelicula (Pelicula){
        //     return `Reproduciendo: ${Pelicula.titulo}`
        // }

        // reproducirDocumental (Documental){
        //     return `Reproduciendo: ${Documental.titulo}`
        // }
}

let titanic = new Pelicula ('Titanic', '190 min', 'Historica', 'T')

let volcanes = new Documental ('Volcanes de America','100 min','UNESCO','México')

let cine = new Cine ('Cinepolis')

console.log(cine.reproducir(titanic));
console.log(cine.reproducir(volcanes));

