
const autenticado = true;

if(autenticado) {
    console.log('El usuario está autenticado');
};

const puntaje = 401;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente!!!');
        return;
    };

    if (puntaje > 300) {
        console.log('Buen puntaje...felicidades');
        return;
    }else{
        console.log('Puntaje insuficiente. Vuelve a intentarlo');
    };
};

revisarPuntaje();

