
// Ventajas de las Arrow Functions


// Función normal con parámetros
const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};

aprendiendo('JavaScript', 'Node.js');

// Arrow Function con parámetros

// Si tenemos 1 solo parámetro el () es opcional, si tengo 2 o mas parámetros tiene que ir con ()
const aprendiendo1 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo1('JavaScript'));


const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));


