
// Unir 2 objetos (Assign & Spread Operator)

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

const medidas = {
    peso: '1kg',
    medida: '1m',
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); // Método Assign: genera una copia de los objetos y los asigna a un nuevo objeto

const resultado2 = {...producto, ...medidas}; // Spread Operator: genera una copia de los objetos y los guarda en un nuevo objeto (ESTA ES LA QUE SE USA COMUNMENTE)


console.log(resultado);
console.log(resultado2);