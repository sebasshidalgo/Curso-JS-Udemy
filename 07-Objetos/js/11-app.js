
// This es una forma de referirnos al objeto en si mismo para acceder a sus valores. Se mantiene en el objeto en el que fue declarado

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    },
};

const producto2 = {
    nombre: 'Tablet',
    precio: 150,
    disponible: false,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    },
};


producto.mostrarInfo();
producto2.mostrarInfo();