
// Método Math

let resultado;

// PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

// Redondear hacia arriba
resultado = Math.ceil(2.1);


// Redondear hacia abajo
resultado = Math.floor(2.9);

// Raiz cuadrada
resultado = Math.sqrt(144);


// Absoluto
resultado = Math.abs(-500); // devuelve el numero sin los signos

// Potencia
resultado = Math.pow(2, 4); // el primer parametro es el numero que queremos potenciar, el segundo paramentro es la potencia deseada

// Mínimo
resultado = Math.min(3,5,1,12,-3);

// Máximo
resultado = Math.max(3,5.1,12, -3);

// Aleatorio
resultado = Math.random(); // numeros aleatorios entre 0 y 1
resultado = Math.random() * 20; // numeros aleatorios entre 0 y 20
// va a devolver siempre números con decimal, si queremos enteros debemos redondearlo
resultado = Math.floor(Math.random() * 30); // asi nos dara numeros aleatorios en ese rango y enteros

/* 
Lo que ponemos en la multiplicacion es el rango. Si quiero por ejemplo numeros entre 14 y 20. El rango es 6, entonces seria:
console.log(Math.random() * 6 + 14);

Math.random() * rango + desplazamiento
O sea despues del * va el rango (la distancia entre los 2 numeros) y despues del + iria el numero mas bajo desde donde quiero que empiece el rango
*/

//Ejemplo: numeros del 37 al 52:
console.log(Math.floor((Math.random() * 15 + 37)));  // 15 es la distancia entre ambos y 37 desde donde quiero que arranque

//Ejemplo: numeros del 0 al 100:
console.log(Math.floor((Math.random() * 100)));  // si arranca desde el 0 no hace falta poner el desplazamiento 

//Ejemplo: numeros del -5 al 50:
console.log(Math.floor((Math.random() * 55 - 5)));  // para que arranque en negativo


console.log(resultado);