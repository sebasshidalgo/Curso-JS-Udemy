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

// Destructuring de objetos anidados
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion); 
console.log(fabricacion);
console.log(pais);

// Si quiero desestructurar y guardar en variable una propiedad del objeto la pongo entre las {} separados por ,
// Si quiero que destructure un objeto anidado en otro objeto pongo nombrePropiedad1 : {nombrePropiedad2, etc}

