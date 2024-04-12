
// Operadores de Comparación

const num1 = 20;
const num2 = "20";
const num3 = 30;

// Comparador igual-igual ==  (compara valor)
console.log(num1 == num3); // false
console.log(num1 == num2); // true

// Comparador estrictamente igual === (compara valor + tipo de dato)
console.log(num1 === num2); // false
console.log(num1 === parseInt(num2)); // true
console.log(typeof num1); // number --> para saber el tipo de dato
console.log(typeof num2); // string --> para saber el tipo de dato

// Comparador distinto a != (compara valor)
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // true
console.log(num1 != num2); // false

// Comparador estrictamente distinto !== (compara valor + tipo de dato)
console.log(num1 !== parseInt(num2)); // false
console.log(num1 !== num2); // true

