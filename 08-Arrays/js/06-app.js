
// Agregar elementos al inicio o al final de un arreglo con Spread Operator

// Creamos un array vacío
const carrito = [];

// Definimos los productos a agregar al carrito
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Celular Samsung Galaxy S22',
    precio: 800,
};

const producto3 = {
    nombre: 'Teclado Logitech',
    precio: 100,
};

// Forma Declarativa (no modifica el elemento original)

let resultado; // declaramos una variable donde se guardara el nuevo carrito

resultado = [...carrito, producto]; // genera una copia del [carrito] y le agrega el producto1 al final
resultado = [...resultado, producto2]; // genera una copia del resultado anterior y le agrega el producto2 al final
resultado = [producto3, ...resultado]; // agrega el producto3 al inicio del [] y luego genera una copia del resultado anterior

console.table(resultado);