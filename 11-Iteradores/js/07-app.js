
// for Of (Para recorrer Arrays)

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150, descuento: true},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500, descuento: true},
];

for( let pendiente of pendientes) {
    console.log(pendiente);
};

for( let producto of carrito) {
    console.log(producto.nombre);
};