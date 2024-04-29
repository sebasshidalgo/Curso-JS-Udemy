
// Arrow Functions en un .forEach y .map

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500},
];


const nuevoArreglo = carrito.map( producto => `Modelo: "${producto.nombre}" - Precio: $${producto.precio}`);
carrito.forEach( producto => console.log(`Modelo: "${producto.nombre}" - Precio: $${producto.precio}`));

console.log(nuevoArreglo);