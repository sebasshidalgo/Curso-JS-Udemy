
// Eliminar elementos de un array con Pop & Shift & Splice

const carrito = [];

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

const producto4 = {
    nombre: 'Mouse Genius',
    precio: 50,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

console.table(carrito);

// Eliminar el último elemento de un arreglo: Pop
carrito.pop();
console.table(carrito);

// // Eliminar el primer elemento de un arreglo: Shift
carrito.shift();
console.table(carrito);

// Eliminar elementos del array desde cualquier posicion: Splice
carrito.splice(1, 2); // el primer parametro es desde donde empezar a eliminar, el segundo parametro es la cantidad de posiciones a eliminar
console.table(carrito);