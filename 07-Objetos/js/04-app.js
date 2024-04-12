const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

console.log(producto);

// Antiguamente para extraer un valor de un objeto y guardarlo en una variable debiamos hacer esto:
// const nombre = producto.nombre;
// console.log(nombre);

// A partir de ECMA Script se utiliza la desestructuración de un objeto 
// que extrae el dato y lo guarda en una variable todo en una misma linea de codigo

// Destructuring

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);