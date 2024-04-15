
// Diferencias entre Function Declaration y Function Expression


// Function Declaration
sumar(); // esto va a funcionar aunque invoquemos la funcion antes de declararla
function sumar(){
    console.log(2 + 2);
};

// Function Expression
// sumar2(); // esto va a arrojar un error porque no se puede acceder a una variable antes de inicializarse la misma
const sumar2 = function(){
    console.log(3 + 3);
};
// Solo va a funcionar si la invocamos dsp de declararla
sumar2();