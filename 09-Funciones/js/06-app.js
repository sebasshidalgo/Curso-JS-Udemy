
// Parámetros por default

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
};

saludar(); // retorna "Hola Desconocido" --> Desconocido es el parámetro por default
saludar('Sebastián'); // retorna "Hola Sebastián  " --> " " es el parámetro por default
saludar('Sebastián', 'Hidalgo'); // retorna "Hola Sebastián Hidalgo" --> si se ingresan los parámetros imprimirá los mismos, 
// si se omiten pondrá los parámetros por defecto