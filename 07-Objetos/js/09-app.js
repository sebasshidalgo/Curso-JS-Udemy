
// Metodo Seal (Sellar objeto)

"use strict"; // habilitamos el "modo estricto"

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

Object.seal(producto); // este método permite modificar las llaves existentes de un objeto
                       // pero no permite agregarlas y/o eliminarlas 

producto.disponible = false; // acá modificamos una llave y lo permite
// producto.imagen = "imagen.jpg"; ---> esto no lo permite
// delete producto.precio; ---> esto no lo permite

console.log(producto);

console.log(Object.isSealed(producto)); // método para saber si un objeto está "sellado"