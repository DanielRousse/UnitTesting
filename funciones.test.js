const funciones = require('./funciones.js');

test("Sumar 2 + 2 es igual a 4", () => {
    expect(funciones.suma(2, 2)).toBe(4);
});

test("Sumar 0 + 0 es igual a 0", () => {
    expect(funciones.suma(0, 0)).toBe(0);
});

test("Sumar 7 + 5 es igual a 12", () => {
    expect(funciones.suma(7, 5)).toBe(12);
});

test("El correo jonas@gmail.com es válido", () => {
    expect(funciones.validarCorreo("jonas@gmail.com")).toBeTruthy();
});

test("El correo 5125aby es invalido", () => {
    expect(funciones.validarCorreo("5125aby")).toBeFalsy();
});

test("calcularDescuento calcula descuento valido correctamente", () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});

test("calcularDescuento con descuento del 0% no altera el precio", () => {
    expect(funciones.calcularDescuento(500, 0)).toBe(500);
});

test("calcularDescuento con descuento del 100% deja el precio en 0", () => {
    expect(funciones.calcularDescuento(300, 100)).toBe(0);
});

test("calcularDescuento con porcentaje mayor a 100 devuelve error", () => {
    expect(funciones.calcularDescuento(300, 120)).toBe("Porcentaje inválido");
});

test("calcularDescuento con porcentaje menor a 0 devuelve error", () => {
    expect(funciones.calcularDescuento(300, -10)).toBe("Porcentaje inválido");
});

test("validarPassword con password valido devuelve true", () => {
    expect(funciones.validarPassword("abc12345")).toBeTruthy();
});

test("validarPassword con password corto devuelve false", () => {
    expect(funciones.validarPassword("abcdef")).toBeFalsy();
});

test("validarPassword con password solo digitos valido devuelve true", () => {
    expect(funciones.validarPassword("12345678")).toBeTruthy();
});

test("validarPassword con password largo pero sin numeros devuelve false", () => {
    expect(funciones.validarPassword("abcdefgh")).toBeFalsy();
});

test("celsiusAFahrenheit con 0 celsius devuelve 32", () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
});

test("celsiusAFahrenheit con 25 celsius devuelve 77", () => {
    expect(funciones.celsiusAFahrenheit(25)).toBe(77);
});

test("celsiusAFahrenheit con -10 celsius devuelve 14", () => {
    expect(funciones.celsiusAFahrenheit(-10)).toBe(14);
});

test("esMayorDeEdad con 18 devuelve true", () => {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy();
});

test("esMayorDeEdad con 25 devuelve true", () => {
    expect(funciones.esMayorDeEdad(25)).toBeTruthy();
});

test("esMayorDeEdad con 16 devuelve false", () => {
    expect(funciones.esMayorDeEdad(16)).toBeFalsy();
});

test("generarNombreCompleto con Ana Martinez devuelve Ana Martinez", () => {
    expect(funciones.generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
});

test("generarNombreCompleto con Luis Ramirez devuelve Luis Ramirez", () => {
    expect(funciones.generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
});