
// Map para iterar un array, y sus diferencias con forEach
// .map crea un nuevo arreglo y .forEach no

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500},
];

const nuevoArreglo = carrito.map( function(producto) {
    return `Modelo: ${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `Modelo: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo); // retorna un nuevo arreglo (.map)
console.log(nuevoArreglo2); //  retorna undefined (.forEach)