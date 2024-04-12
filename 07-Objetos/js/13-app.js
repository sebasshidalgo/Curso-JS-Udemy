
// Métodos keys & values & entries

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

console.log(Object.keys(producto)); // retorna las llaves de un objeto (lo muestra en un array)

console.log(Object.values(producto)); // retorna los valores de cada llave en un objeto (lo muestra en un array)

console.log(Object.entries(producto)); // retorna las entradas de un objeto en pares llave-valor (lo muestra en un array por cada llave-valor)