
// Parámetros y Argumentos en Funciones

function sumar(a, b) { // a y b son parámetros
    console.log(a + b);
};

sumar(2, 3); // 2 y 3 son argumentos (los valores reales que se le pasan a la funcion)

// Podemos reutilizar el código de la función cambiando los argumentos, lo que la hace más dinámica
sumar(200, 184);
sumar(124, 321);

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
};

saludar('Sebastián', 'Hidalgo');
saludar('Sebastián', ); // si no le pasamos un argumento va a retornar Undefined
saludar(); // retornara "Hola undefined undefined"