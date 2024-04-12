
// Booleans

const autenticado = true;

if(autenticado) {     // --> si pusieramos if(autenticado === true) estaría mal porque ya esta implicito el true
    console.log('Si puedes ver Netflix');
} else{
    console.log('No, no puedes verlo');
};

//Operador Ternario

console.log(autenticado ? 'Si está autenticado' : 'No está autenticado');