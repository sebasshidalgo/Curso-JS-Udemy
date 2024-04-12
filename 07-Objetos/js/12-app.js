
// Object Literal
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

console.log(producto);

// Object Constructor
function Producto(nombre, precio) {   // Función constructora de objetos
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
};

const producto2 = new Producto('Monitor 24 Pulgadas', 500); // creación de nuevo objeto con funcion constructora
console.log(producto2);

const producto3 = new Producto('Televisión 50 Pulgadas', 100);
console.log(producto3);
