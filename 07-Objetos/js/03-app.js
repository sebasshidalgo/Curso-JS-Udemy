
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";   // --> en este caso utilizamos el = y no : porque estamos por fuera del objeto, para asignarle el valor

// Eliminar propiedades del objeto
delete producto.disponible;


console.log(producto);