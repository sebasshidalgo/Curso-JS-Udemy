
// Bucle For

// un For básico
for (let i = 0; i<=10; i++){          
    console.log(`Número: ${i}`);
};

// un For aumentando de 2 en 2
for (let i = 0; i<=10; i+=2){        
    console.log(`Estoy aumentando de 2 en 2: ${i}`);
};

// un For con condicionales if para determinar números pares
for (let i = 1; i<= 20; i++){   
    if(i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    };
};

// un For para recorrer arreglos con métodos y propiedades
const carrito =[
    {nombre: 'Monitor 20 Pulgadas', precio: 400},
    {nombre: 'Celular Samsung S22', precio: 800},
    {nombre: 'Teclado Logitech', precio: 150},
    {nombre: 'Mouse Genius', precio: 50},
    {nombre: 'Macbook Pro 13 Pulgadas', precio: 1500},
];

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(`Producto n°${i}: ${carrito[i].nombre}`);
};

