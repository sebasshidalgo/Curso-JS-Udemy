
// Métodos de propiedad en los Arrow Function

// Acá básicamente hago el mismo reproductor que en el archivo 09 pero con arrow functions (acortando el codigo)
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el ID ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción ${id}...`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}...`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {  // Set agrega un valor
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {    // Get obtiene un valor
        console.log(`La canción seleccionada es: ${this.cancion}`);
    }
};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Rock Internacional');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');