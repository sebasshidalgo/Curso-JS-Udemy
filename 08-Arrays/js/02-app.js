
// Acceder a los valores de un Array

const numeros = [10,20,30,40,50, [1,2,3]];

console.log(numeros);
console.table(numeros); // para ver los datos en formato tabla (mas comodo si queremos ver la posiciones del array)

// Acceder al arreglo
console.log(numeros[2]); // retorna 30
console.log(numeros[0]); // retorna 10
console.log(numeros[20]); // retorna Undefined porque no existe esa posicion en el array
console.log(numeros[5]); // retorna el arreglo [1,2,3]
console.log(numeros[5][1]); // retorna el arreglo [1,2,3] en la subposición [1]