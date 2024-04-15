
// Añadir Funciones en un Objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción ${id}...`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}...`);
    },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Rock Internacional');

// también podemos agregarle propiedades al objeto por fuera del mismo
reproductor.reproducirPlaylist = function(nombre){
    console.log(`Reproduciendo la playlist ${nombre}`);
};
reproductor.reproducirPlaylist('Rock Internacional'); // acá si la invoco antes de declararla me tira error(creo que es porque esta como Function Expression es decir declarativa)