
// For In (Para recorrer Objetos)

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
};

for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
};

// For of Object.entries (Para recorrer objetos con llave-valor)

for( let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
};



