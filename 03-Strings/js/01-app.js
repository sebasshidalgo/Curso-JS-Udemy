
// Formas de declarar variables de tipo String

const producto = "Monitor 20\"";  // ---> con la barra invertida \ "escapas" las comillas para que no tire error cuando queremos poner pulgadas por ejemplo
const producto2 = String('Monitor 24"');
const producto3 = new String ('Monitor 27 Pulgadas'); // ---> esta opción crea un {objeto} de tipo String, no se usa mucho

console.log(producto);
console.log(producto2);
console.log(producto3);