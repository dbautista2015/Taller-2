let edad = parseInt(prompt("Ingresar edad: "));
console.log(verificar(edad));

function verificar(edad) {
    switch (edad) {
        case 18:
            console.log(`Es mayor de edad ${edad}`);
            break;
        default:
            console.log(`La edad ingresada no cumple con los parámetros`);
            break;
    }
    
}
