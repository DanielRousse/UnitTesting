# Pruebas Unitarias con Jest

Este file contiene una serie de funciones básicas de JavaScript y su correspondiente conjunto de pruebas unitarias desarrolladas utilizando Jest. El objetivo es validar el correcto funcionamiento de cada función ante diferentes escenarios, incluidos casos de éxito, valores límite y casos de error.

---

## Estructura del Proyecto

* **[funciones.js]**: Contiene la implementación de todas las funciones lógicas del proyecto.
* **[funciones.test.js]**: Contiene los casos de prueba unitaria desarrollados en Jest para verificar el comportamiento de las funciones.
* **[package.json]**: Configuración del entorno de Node.js y dependencias de Jest.

---

## Explicación de Funciones y Pruebas Unitarias

A continuación se detalla el comportamiento de cada función, las validaciones de sus pruebas, los casos de prueba y sus resultados esperados.

### 1. Funciones trabajadas en clase

#### A. Suma (`suma`)
* **Propósito**: Recibe dos números y retorna la suma aritmética de ambos.
* **Pruebas y Casos**:
  * `Sumar 2 + 2`: Valida que la suma de valores positivos devuelva `4`.
  * `Sumar 0 + 0`: Valida que la suma de ceros devuelva `0`.
  * `Sumar 7 + 5`: Valida que la suma devuelva `12`.

#### B. Multiplicación (`multiplica`)
* **Propósito**: Recibe dos números y retorna el producto de su multiplicación.
* **Pruebas y Casos**: Esta función no poseía pruebas en el código inicial, pero realiza la operación básica `x * y`.

#### C. Validación de Correo (`validarCorreo`)
* **Propósito**: Comprueba si un string corresponde a un correo electrónico válido empleando una expresión regular.
* **Pruebas y Casos**:
  * `"jonas@gmail.com"`: Valida una estructura de correo correcta, retornando `true`.
  * `"5125aby"`: Valida un formato de correo inválido, retornando `false`.

---

### 2. Funciones de la actividad

#### A. Calculadora de Descuento (`calcularDescuento`)
* **Propósito**: Calcula el precio final de un artículo tras aplicar un porcentaje de descuento. Valida que el porcentaje esté entre 0 y 100 inclusive.
* **Casos de prueba y Resultados esperados**:
  | Entrada (`precio`, `porcentaje`) | Resultado Esperado | Descripción del Caso |
  | :--- | :--- | :--- |
  | `1000, 20` | `800` | Descuento válido común (20%) |
  | `500, 0` | `500` | Límite inferior: 0% de descuento |
  | `300, 100` | `0` | Límite superior: 100% de descuento (gratis) |
  | `300, 120` | `"Porcentaje inválido"` | Entrada errónea: porcentaje superior al 100% |
  | `300, -10` | `"Porcentaje inválido"` | Entrada errónea: porcentaje inferior al 0% |

#### B. Validación de Contraseña (`validarPassword`)
* **Propósito**: Evalúa la seguridad de una contraseña verificando que cumpla con un mínimo de 8 caracteres y que posea al menos un dígito numérico.
* **Casos de prueba y Resultados esperados**:
  | Entrada (`password`) | Resultado Esperado | Descripción del Caso |
  | :--- | :--- | :--- |
  | `"abc12345"` | `true` | Contraseña válida (8 caracteres, incluye números) |
  | `"abcdef"` | `false` | Contraseña inválida por longitud (menor a 8 caracteres) |
  | `"12345678"` | `true` | Contraseña válida (8 caracteres numéricos) |
  | `"abcdefgh"` | `false` | Contraseña inválida (suficiente longitud pero sin números) |

#### C. Conversor de Temperatura (`celsiusAFahrenheit`)
* **Propósito**: Convierte una temperatura expresada en grados Celsius a grados Fahrenheit usando la fórmula: `(°C × 9/5) + 32`.
* **Casos de prueba y Resultados esperados**:
  | Entrada (`celsius`) | Resultado Esperado | Descripción del Caso |
  | :--- | :--- | :--- |
  | `0` | `32` | Punto de congelación del agua |
  | `25` | `77` | Temperatura ambiente típica |
  | `-10` | `14` | Temperatura bajo cero |

#### D. Verificador de Mayoría de Edad (`esMayorDeEdad`)
* **Propósito**: Determina si un usuario es mayor de edad en función del parámetro `edad` ingresado (18 años o más).
* **Casos de prueba y Resultados esperados**:
  | Entrada (`edad`) | Resultado Esperado | Descripción del Caso |
  | :--- | :--- | :--- |
  | `18` | `true` | Edad límite de mayoría de edad |
  | `25` | `true` | Edad claramente mayor de edad |
  | `16` | `false` | Menor de edad |

#### E. Generador de Nombre Completo (`generarNombreCompleto`)
* **Propósito**: Genera un único string concatenando el nombre y el apellido del usuario con un espacio de separación.
* **Casos de prueba y Resultados esperados**:
  | Entrada (`nombre`, `apellido`) | Resultado Esperado | Descripción del Caso |
  | :--- | :--- | :--- |
  | `"Ana", "Martínez"` | `"Ana Martínez"` | Concatenación correcta con caracteres especiales |
  | `"Luis", "Ramírez"` | `"Luis Ramírez"` | Concatenación correcta estándar |

---

## Problemas y Decisiones de Desarrollo

Durante el desarrollo de la actividad, se tomaron en consideración los siguientes aspectos y retos:

1. **Validación de Límites en Descuentos**:
   * En la función `calcularDescuento`, es común pasar por alto porcentajes negativos o superiores al 100%. Se implementó una cláusula de guarda para asegurar que solo se procesen porcentajes lógicos.
2. **Validación de la Contraseña**:
   * Para buscar números de manera eficiente en la contraseña sin complicar el flujo, se empleó la expresión regular `/\d/` junto con `.test()`, que devuelve directamente un valor booleano, optimizando así la estructura de control de `validarPassword`.

---

## Ejecución de Pruebas

Para correr las pruebas unitarias y verificar el comportamiento del proyecto, utiliza el siguiente comando en la terminal:

```bash
npm test 
```