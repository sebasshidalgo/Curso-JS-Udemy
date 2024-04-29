
// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150, descuento: true},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500, descuento: true},
];

const nuevoArreglo = carrito.forEach( producto => producto.nombre);  // al ser una arrow function si hay 1 solo parametro el () es opcional

const nuevoArreglo2 = carrito.map( (producto) => producto.nombre);

console.log(nuevoArreglo); // va a imprimir Undefined porque el forEach no guarda nada en el nuevo array, va a quedar un array vacío
console.log(nuevoArreglo2); // imprime el nuevo array con los datos de producto. La diferencia entre el map y forEach es que el map crea un nuevo arreglo y el forEach no