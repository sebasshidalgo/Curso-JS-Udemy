
const dinero = 600;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Si tengo un cheque');
} else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta')
} else {
    console.log('Fondos Insuficientes');
};

// el if solo ejecuta la primera condicion que se cumpla en el codigo, si hay 2 condiciones que son true, solo va a ejecutar la que primero aparezca en el codigo
