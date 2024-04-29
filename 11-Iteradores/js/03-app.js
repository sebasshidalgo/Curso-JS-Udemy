
// Desafío Fizz Buzz - 100 Números

// Multiplos de 3 ... Fizz
// Multiplos de 5 ... Buzz
// Multiplos de 15 ... FIZZBUZZ!

for(let i = 1; i < 100; i++) {
    if (i % 15 === 0) {    
        console.log(`${i} FIZZBUZZ!!!`);
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} buzz`);
    };
};

/*
Siempre conviene poner como primer condicion la mas dificil de cumplirse
Porque el if ni bien encuentre una condicion que se cumpla va a dejar de validar las otras
Por ende si ponemos la validacion de multiplos de 15 a lo ultimo, jamas va a imprimir ese console log
Porque primero va a validar si es multiplo de 3 o 5 y al cumplirse imprimira esas lineas de codigo
*/