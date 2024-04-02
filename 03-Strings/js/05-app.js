
// Métodos String

const producto = "Monitor 20 Pulgadas";

// Replace (para reemplazar el texto en un string)
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Slice (para cortar o extraer un fragmento del string, pasando la posicion inicial y la final)
console.log(producto.slice(0, 10));
console.log(producto.slice(8));  // ---> si no le paso la posicion final lo que hace es cortar hasta la posicion que le indique
console.log(producto.slice(2, 1)); // ---> si la posicion inicial es mayor a la final no corta hacia atras, no hace nada

// Substring es un método alternativo a Slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // ---> la diferencia principal con Slice es que si le pasamos una posicion inicial mayor a la final lo que hace es darlo vuelta
// es decir si le pasamos (2,1) hace (1,2) es decir corta desde la pos 1 hasta la pos 2 y por ende muestra solo el caracter "o"


// Ejemplo de como hacen para mostrar las iniciales de un usuario en el perfil de google por ejemplo SH
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
