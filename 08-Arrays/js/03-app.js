
// Recorrer un Array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// En vez de hacer esto para acceder a cada posicion del arreglo

console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Lo podemos recorrer con un for teniendo en cuenta la longitud del arreglo

// Cuanto mide el arreglo?
console.log(meses.length);

for(let i= 0; i < meses.length; i++){
    // console.log(i); // acá imprime el iterador i en cada posicion (0,1,2,3)
    console.log(meses[i]); // de esta forma imprime el valor de i en casa posicion del arreglo [enero, febrero, marzo]
};