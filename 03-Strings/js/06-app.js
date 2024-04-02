
// Métodos String

const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en Promoción'.repeat(3);
const texto1 = ' prueba'.repeat(2.4); // ---> si a .repeat le indicamos un numero con decimal JS va a redondearlo al entero inferior
console.log(texto);
console.log(texto1); // ---> repite solo 2 veces (2.4 --> 2)
console.log(`${producto}${texto}!!!`);

// .split permite dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // ---> divide el string por el caracter que le indiquemos en este caso un espacio vacio " " y lo devuelve como un array

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));
