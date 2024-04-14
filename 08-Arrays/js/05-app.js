
// Anadir elementos al inicio o al final de un Array

// Creamos un array vacío
const carrito = [];

// Definimos los productos a agregar al carrito
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Celular Samsung Galaxy S22',
    precio: 800,
};

const producto3 = {
    nombre: 'Teclado Logitech',
    precio: 100,
};

// Forma Imperativa (modifica el elemento actual)

// .push agrega al final de un arreglo
carrito.push(producto, producto2);
// carrito.push(producto2);

// .unshift agrega al inicio de un arreglo
carrito.unshift(producto3);

console.table(carrito);