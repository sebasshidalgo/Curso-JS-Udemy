
// forEach para iterar un Array

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500},
];

// for tradicional:
for(let i= 0; i < carrito.length; i++){
    console.log(`Modelo: "${carrito[i].nombre}" - Precio: $${carrito[i].precio} `);
};

// (separador)
console.log("*********************************************************");

// forEach
carrito.forEach( function(producto) {
    console.log(`Modelo: "${producto.nombre}" - Precio: $${producto.precio}`);
});

// con ambas formas se llega al mismo resultado, pero es mas comodo el forEach porque permite acortar el codigo