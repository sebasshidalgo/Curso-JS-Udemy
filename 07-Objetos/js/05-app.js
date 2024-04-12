
// Objetos dentro de objetos

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg.',
            medida: '1mts.',
        },
        fabricacion: {
            pais: 'China',
        },
    },
};

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.fabricacion.pais); // con cada punto es como que vas un nivel mas adentro del objeto

