

// Object Methods

"use strict";  
// habilita el "modo estricto" para no permitir malas practicas en el codigo, 
// de esta forma podemos lograr por ej. que los objetos se comporten igual que las constantes y no puedan ser modificados

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

Object.freeze(producto); // este método "congela" el objeto para que no pueda ser modificado 
// (el codigo comentado aca abajo tiraria error por el uso de este metodo)

// producto.disponible = false;
// producto.imagene = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto)); // método para saber si un objeto está "congelado"