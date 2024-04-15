
// Funciones que retornan valores

function sumar (a, b) {
    return a + b;
};

const resultado = sumar(2, 3);

console.log(resultado);

// Un ejemplo de funciones con retorno mas avanzado calcular precio + IVA

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
};
function calcularIVA(total) {
    return total * 1.21;
}

total = agregarCarrito(300);
console.log(total);
total = agregarCarrito(100);
console.log(total);
total = agregarCarrito(600);
console.log(total);

const totalPagar = calcularIVA(total);

console.log(`El total sin impuestos es: $${total}`);
console.log(`El total a pagar con impuestos es de: $${totalPagar}`);

