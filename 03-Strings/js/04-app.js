
// Métodos String

const producto = "              Monitor 20 Pulgadas              ";

console.log(producto);
console.log(producto.length);

// Método para eliminar espacios en blanco en el inicio de un String
console.log(producto.trimStart());

// Método para eliminar espacios en blanco al final de un String
console.log(producto.trimEnd());

// En JS podemos utilizar los metodos en forma encadenada lo que se conoce como "chaining"
console.log(producto.trimStart().trimEnd());


// .trimStart() y .trimEnd() son métodos nuevos. El método antiguo es .trim() que elimina los espacios en blanco en ambas direcciones:
console.log(producto.trim());

