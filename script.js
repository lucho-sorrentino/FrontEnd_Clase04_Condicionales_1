// ===================================== EJERCICIOS CON CADENAS DE TEXTOS =====================================

// ********** Ejercicio 1 **********
// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
// let text = prompt("Por favor ingrese un texto");
// console.log(text.includes("a"));


// ********** Ejercicio 2 **********
// Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
// let text = prompt("Por favor ingrese un texto");
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());


// ********** Ejercicio 3 **********
// Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
// let text = prompt("Por favor ingrese una palabra");
// console.log(text.charAt(0));


// ********** Ejercicio 4 **********
// Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
// let text = prompt("Ingrese una frase");
// console.log(text.length);


// ********** Ejercicio 5 **********
// Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
// let num = prompt("Ingrese un número con n cantidad de dígitos");
// console.log(num.length);




// ********** Ejercicio 6 **********
// Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

// let text = prompt("Ingrese una palabra");
// console.log("La palabra termina con la letra: " + (text[text.length-1]));

// Tambien así:
// console.log("La palabra termina con la letra: " + text.charAt(text.length-1));





// ********** Ejercicio 7 **********
// Ingresar una cadena de texto y reemplazar los espacios por asteriscos.

// let text = prompt("Ingrese un texto");
// console.log(text.replaceAll(" ", "*"));



// ********** Ejercicio 8 **********
// Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

// let text = prompt("Ingrese un texto");
// let letra = prompt("Ingrese la lerta a verificar");
// console.log(text.includes(letra));





// ********** Ejercicio 9 **********
// Solicitar un texto y mostrarlo todo menos la primera letra.

// let text = prompt("Ingrese un texto");
// let longitud = text.length;
// console.log(text.slice(1,longitud));





// ********** Ejercicio 10 **********
// Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
// let text = prompt("Ingrese un texto con todas las palabras en minúscula:");
// let prim = text[0];
// let longitud = text.length;
// console.log(prim.toUpperCase() + text.slice(1,longitud));




// =========================== EJERCICIOS CON CONDICIONALES (PARTE 1) ===========================


// ********** Ejercicio 1 **********
// Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, si no, que muestre un mensaje de error. 
    // EJERCICIO 5 variables: Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies,  centimetros y pulgadas. Mostrar por consola los tres resultados.

// let valorMetro = prompt("Por favor ingrese el valor que desea convertir:");
// let pies = parseFloat(valorMetro) * 3.28;
// let cms = parseFloat(valorMetro) * 100;
// let pulgadas = parseFloat(valorMetro) * 39.38;
// console.log((pies) + " " + "ft");
// console.log((cms) + " " + "cms");
// console.log((pulgadas) + " " + "in");

// let valorMetro = prompt("Por favor ingrese el valor que desea convertir:");
// let pies = parseFloat(valorMetro) * 3.28;
// let cms = parseFloat(valorMetro) * 100;
// let pulgadas = parseFloat(valorMetro) * 39.38;         
// if (isNaN(valorMetro)) {                                           
//     alert("El valor ingresado no corresponde a un número!!");
// } else {    
//     console.log((pies) + " " + "ft");
//     console.log((cms) + " " + "cms");
//     console.log((pulgadas) + " " + "in");
// }

// ¡¡¡¡¡¡¡¡¡  PREGUNTAR sobre isNaN()  !!!!
// VER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
//      https://lenguajejs.com/javascript/fundamentos/variables-numericas/





// ********** Ejercicio 2 **********
// Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad; si no, decir que es mayor.

// let edad = parseInt(prompt("Ingrese su edad:"));
// if (edad >= 18) {
//     alert("Usted es mayor de edad");
// } else {
//     alert("Usted es menor de edad");
// }



// ********** Ejercicio 3 **********
// Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// let gusto = prompt("Ingrese el/los gustos de helado separados por un espacio");
// let cobertura = prompt("Desea agregarle cobertura? Ingrese: si o no");
// if (cobertura === "si") {
//     alert("Su helado sabor " + gusto + ", con cobertura de chocolate, cuesta $180");
// } else {
//     alert("Su helado sabor " + gusto + ", sin cobertura de chocolate, cuesta $150");
// }

    



// ********** Ejercicio 4 **********
// Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.

// let numeroA = parseInt(prompt("Ingrese un número")) ;
// let numeroB = parseInt(prompt("Ingrese otro número")); 
// let suma = numeroA + numeroB;
// console.log(suma);
// if (suma % 2 == 0) {
//     alert("El número ingresado es par");
// } else {
//     alert("El número ingresado es impar");
// }




// ********** Ejercicio 5 **********
// Solicitar al usuario un número e indicar si es positivo, negativo o cero.

// let numero = parseFloat(prompt("Ingrese un número"));
// if (numero == 0) {
//     alert("El número ingresado es 0");
// } else if (numero < 0) {
//     alert("El número ingresado es negativo");
// } else if (numero > 0) {
//     alert("El número ingresado es positivo");
// } else {
//     alert("El valor ingresado no es válido!");
// }




// ********** Ejercicio 6 **********
// Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
// let monto = parseFloat(prompt("Ingrese el monto a pagar"));
// if (monto > 2000) {
//     alert("El total a pagar con descuento es de $" + (monto - (monto * 0.1)));
// } else {
//     alert("Ud. no ha sido beneficiado con un descuento. El monto a pagar es de $" + monto);
// }




// ********** Ejercicio 7 **********
// Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

// let texto = prompt("Ingrese un texto:");
// let posicion = parseInt(prompt("Ingrese el número de la posición del caracter a verificar:"));
// let pos = texto[posicion];
// if (pos == "a" || pos == "e" || pos == "i" || pos == "o" || pos == "u") {
//     alert("El caracter es una vocal");
// } else {
//     alert("El caracter no es una vocal");
// }




// ********** Ejercicio 8 **********
// Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 





// ********** Ejercicio 9 **********
// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.






// ********** Ejercicio 10 **********
// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.




// ********** Ejercicio 11 **********
// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.






// ********** Ejercicio 12 **********
// Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).





// ********** Ejercicio 13 **********
// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).







// ===================================== BONUS =====================================

// ********** Bonus 1 **********
// Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.






// ********** Bonus 2 **********
// Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.







// ********** Bonus 3 **********
// Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.
