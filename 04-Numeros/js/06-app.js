
// Metodos para convertir string en numeros

const num1 = 20;
const num2 = "20";
const num3 = "Veinte";
const num4 = 20.2;

console.log(num1); // tipo de dato numerico (figura en violeta cuando es numerico)
console.log(num2); // tipo de dato string (figura en blanco cuando es string)
console.log(Number.parseInt(num2)); // convierte el dato string a un dato numerico entero
console.log(Number.parseFloat(num2)); // convierte el dato string a un dato numerico con decimal
console.log(Number.parseInt(num3)); // no lo puede convertir retorna NaN

console.log(typeof(num3)); // devuelve el tipo de dato de una variable

console.log(Number.isInteger(num4)); // devuelve true si es entero o false si no lo es
console.log(Number.isInteger(num1)); // devuelve true si es entero o false si no lo es

