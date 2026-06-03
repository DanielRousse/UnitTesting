function suma (a,b){
    return a + b;
}

function multiplica(x,y){
    return x * y;
}

function validarCorreo(correo) {
    const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!(correo.match(regex))) {
        return false;
    }
    return true;
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;
module.exports.validarCorreo = validarCorreo;

// Actividad

function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje inválido";
    }
    return precio - (precio * (porcentaje / 100));
}

function validarPassword(password) {
    if (password.length < 8) {
        return false;
    }
    return /\d/.test(password);
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function esMayorDeEdad(edad) {
    return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;

