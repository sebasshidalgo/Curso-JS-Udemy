
// Break y Continue

for (let i = 0; i <= 10; i++){
    if(i === 5) {
        console.log('CINCO');
        //continue;   // Continue rompe el ciclo en el que estamos parados entonces no ejecuta la siguiente linea de codigo. En este caso el console.log
        break;   // Break rompe totalmente el bucle a pesar de que la condicion inicial no se haya cumplido
    }
    console.log(`Numero: ${i}`);
};

const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150, descuento: true},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500, descuento: true},
];

for(let i= 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
};