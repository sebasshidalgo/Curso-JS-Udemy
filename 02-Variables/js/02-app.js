
// Sintaxis moderna para crear variables ---> let

// Inicializar variable
let producto = "Tablet";
console.log(producto);

// Las variables se pueden reasignar
producto = 'Monitor';   // se pueden utilizar comillas dobles " " o simples ' '
console.log(producto);

// JS es un lenguaje de tipo dinamico, no se especifica el tipo de dato
producto = 20;
console.log(producto);

producto = true;
console.log(producto);

producto = null;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo despues
let precio;
// precio = 300; // ---> si esta declarada pero sin asignarle un valor la consola devolverá Undefined
console.log(precio);