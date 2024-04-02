
// Método Concatenar

const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

console.log(producto.concat(" ", precio));
console.log(producto.concat(" En descuento"));


// Otras formas de concatenar strings y variables
console.log(producto + " Con un precio de: " + precio);
console.log("El producto " + producto + " tiene un precio de " + precio);


// La forma moderna de concactenar en ES6 --> UTILIZAR ESTA!
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

