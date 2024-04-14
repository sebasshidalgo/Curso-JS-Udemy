
// Destructuring de Arrays
// Al igual que en el destructuring de objetos extrae el dato y lo guarda en una variable todo en una misma linea de codigo

const numeros = [10,20,30,40,50];

// const [primero] = numeros; // si quisiera acceder a la primera posicion (puedo ponerle el nombre que quiera al parametro, lo que se respeta es la posicion)

// console.log(primero); // retorna 10

// const [primero, segundo, tercero] = numeros; // si yo necesitara acceder a la 3er posicion estaria guardando datos en primero y segundo que son innecesarios (Incorrecto)
// console.log(primero,segundo,tercero);

// const [ , , tercero] = numeros; // le decimos que las primeras 2 posiciones estan vacias no nos interesan y que retorne la 3er posicion del arreglo (Correcto)
// console.log(tercero);

const [primero, , tercero] = numeros; // salteamos la 2da posicion del array
console.log(primero, tercero);

// const [tercero] = numeros;
// console.log(tercero); // esto me va a retornar 10 porque mas alla de que yo le haya puesto de nombre "Tercero" se corresponde a la primer posicion del array
