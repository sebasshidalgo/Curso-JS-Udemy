
// Cómo acceder a los valores de un objeto?

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

console.log(producto);

// Accedemos a los valores con la sintaxis objeto.clave
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//  Otra forma de acceder es:
console.log(producto['nombre']);

