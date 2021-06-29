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
// let text = prompt("Ingrese su nombre en minúsculas:");
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

// let nota = parseInt(prompt("Ingrese su nota, dato de tipo numérico con valor entre 1 y 10:"));
// console.log(nota);
// if (nota >= 0 && nota < 4) {
//     console.log(nota);
//     alert("Usted ha aplazado");
// } else if (nota == 4 || nota == 5) {
//     console.log(nota);
//     alert("Usted ha reprobado");
// } else if (nota >= 6 && nota <= 10) {
//     alert("Usted ha aprobado");
//     console.log(nota);
// }    


// ********** Ejercicio 9 **********
// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

// let numA = parseInt(prompt("Ingrese 1 número:"));
// let numB = parseInt(prompt("Ingrese otro número:"));
// if (numA === numB) {
//     alert("Los números son iguales");
// } else if (numA > numB) {
//     alert(numA + " " + "es mayor que " + " " + numB);
// } else if (numB > numA) {
//     alert(numB + " " + "es mayor que " + " " + numA);
// }




// ********** Ejercicio 10 **********
// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
// Meses con 30 días: Abril, Junio, Septiembre y Noviembre
// Meses con 31 días: Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre
// Meses con 28/29 días: Febrero 

// Resolución A:
// let mesLargo = "eneromarzomayojulioagostooctubrediciembre";
// let mesMedio = "abriljunioseptiembrenoviembre";
// let mesCorto = "febrero";
// let mes = prompt("Por favor ingrese el nombre (en minúsculas) del mes para saber cuántos días tiene:");
// let coincidencia1 = mesLargo.indexOf(mes);
// console.log(coincidencia1)
// let coincidencia2 = mesMedio.indexOf(mes);
// console.log(coincidencia2)
// let coincidencia3 = mesCorto.indexOf(mes);
// console.log(coincidencia3)

// if (coincidencia1 !== -1) {
//     alert("Este mes tiene 31 días");
// } else if (coincidencia2 !== -1) {
//     alert("Este mes tiene 30 días");
// } else if (coincidencia3 !== -1) {
//     alert("Este mes tiene 28 o 29 días");
// } else {
//     alert("Los datos ingresados no corresponden al nombre de un mes!!");

// $$$$$ NO funciona bien. Detecta subcadenas NO válidas, por ej: "no"; "juli", etc. $$$$$

// Ver abajo!! Se resuelve con un "switch", con "casos" para cada mes del año, ingresando datos numéricos:
// Resolución B:
// switch(menu) {
//     case 1:
//         codigo a ejecutar;
//         break;
//     case 2:
//         codigo a ejecutar;
//         break;
//     default:
//         codigo a ejecutar;
// }

// let menu = parseInt(prompt("Por favor ingrese el número del mes para saber cuántos días tiene:"));
// switch(menu) {
//     case 1:
//         alert("El mes de enero tiene 31 días");
//         break;
//     case 2:
//         alert("El mes de febrero tiene 28 o 29 días");
//         break;
//     case 3:
//         alert("El mes de marzo tiene 31 días");
//         break;
//     case 4:
//         alert("El mes de abril tiene 30 días");
//         break;
//     case 5:
//         alert("El mes de mayo tiene 31 días");
//         break;
//     case 6:
//         alert("El mes de junio tiene 30 días");
//         break;
//     case 7:
//         alert("El mes de julio tiene 31 días");
//         break;
//     case 8:
//         alert("El mes de agoto tiene 31 días");
//         break;
//     case 9:
//         alert("El mes de noviembre tiene 30 días");
//         break;
//     case 10:
//         alert("El mes de octubre tiene 31 días");
//         break;
//     case 11:
//         alert("El mes de noviembre tiene 30 días");
//         break;
//     case 12:
//         alert("El mes de diciembre tiene 31 días");
//         break;
//     default:
//         alert("El dato ingresado no es válido!");    
// }




// ********** Ejercicio 11 **********
// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

// let numA = parseFloat(prompt("Ingrese el primer número:"));
// console.log(numA);
// let numB = parseFloat(prompt("Ingrese el segundo número:"));
// console.log(numB);
// let numC = parseFloat(prompt("Ingrese el tercer número:"));
// console.log(numC);
// if (numA > numB && numA > numC) {
//     alert(numA + " " + "es el número más alto");
// } else if (numB > numA && numB > numC) {
//     alert(numB + " " + "es el número más alto");
// } else if (numC > numA && numC > numB) {
//     alert(numC + " " + "es el número más alto");
// } else {
//     alert("El dato ingresado no es válido!!")
// }






// ********** Ejercicio 12 **********
// Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

// const precioCerveza = 80;
// const precioJugo = 60;
// const precioAgua = 40;
// let precio = 0;
// let pago = 0;
// let edad = parseInt(prompt("Ingrese su edad:"));
// let bebida = parseInt(prompt("Ingrese el número de la bebida que desea. Disponemos de:" + "\n" +
//      "1. Cerveza" + "\n" + 
//      "2. Jugo" + "\n" +
//      "3. Agua"));
// switch(bebida) {
//     case 1:        
//         precio = precioCerveza
//         // console.log(bebida);
//         break;
//     case 2:        
//         precio = precioJugo;        
//         break;
//     case 3:        
//         precio = precioAgua;        
//         break;
//     default:
//         alert("El dato ingresado no es válido.");
//         break;
// }
// if (bebida === 1 && edad < 18) {
//     alert("Usted es menor de edad. No le puedo vender alcohol");
// } else {
//     pago = parseFloat(prompt("El precio de su bebida es de $" + precio + ". ¿Con cuánto va a abonar?"));
//     if (pago < precio) {
//         alert("No le alcanza para pagar su bebida!!");
//     } else if (pago === precio) {
//         alert("Gracias por su compra. Pagó con cambio justo por lo cual no recibe vuelto.");
//     } else {
//         alert("Gracias por su compra. Su vuelto es de $" + (pago - precio) + ".");
//     }             
// }          
        

//IMP!! No puedo definir/inicializar una variable dentro de una sentencia If. Preguntar diferencias entre declarar variables con let o var y cuándo se puede inicializar una variable con valor "" o con valor "0"
//     StackOverflow: https://es.stackoverflow.com/questions/56116/cuando-conviene-utilizar-var-let-y-const-en-ecma-script-6
//                    https://es.stackoverflow.com/questions/106042/var-let-const-o-nada-en-javascript






// ********** Ejercicio 13 **********
// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).

// let calendario = parseInt(prompt("Ingrese el número del mes para ver su nombre:"));
// switch(calendario) {
//     case 1:
//         alert("El mes 1 corresponde a Enero");
//         break;
//     case 2:
//         alert("El mes 2 corresponde a Febrero");
//         break;
//     case 3:
//         alert("El mes 3 corresponde a Marzo");
//         break;
//     case 4:
//         alert("El mes 4 corresponde a Abril");
//         break;
//     case 5:
//         alert("El mes 5 corresponde a Mayo");
//         break;
//     case 6:
//         alert("El mes 6 corresponde a Junio");
//         break;
//     case 7:
//         alert("El mes 7 corresponde a Julio");
//         break;
//     case 8:
//         alert("El mes 8 corresponde a Agosto");
//         break;
//     case 9:
//         alert("El mes 9 corresponde a Septiembre");
//         break;
//     case 10:
//         alert("El mes 10 corresponde a Octubre");
//         break;
//     case 11:
//         alert("El mes 11 corresponde a Noviembre");
//         break;
//     case 12:
//         alert("El mes 12 corresponde a Diciembre");
//         break;
//     default:
//         alert("El dato ingresado no es válido!!")
// }





// ===================================== BONUS =====================================

// ********** Bonus 1 **********
// Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

// let clave = 1234
// let saldo = 45000;
// let extraccion = 0;
// let claveUsuario = parseInt(prompt("Ingrese su clave"));
// if (clave !== claveUsuario) {
//     alert("La clave ingresada es incorrecta!!")    
// } else {
//     extraccion = parseFloat(prompt("Ingrese el monto que desea retirar"));
//     if (extraccion <= saldo) {
//         alert("Ya puede retirar su dinero");
//     } else{
//         alert("Saldo insuficiente");    
//     }
// }




// ********** Bonus 2 **********
// Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

// let dia = parseInt(prompt("Ingrese el número correspondiente al día de su fecha de nacimiento:"));
// let mes = parseInt(prompt("Ingrese el número correspondiente al mes de su fecha de nacimiento:"));
// if (dia >= 21 && mes === 3 || dia <= 20 && mes === 4) {
//     alert("Su signo es Aries!");
// } else if (dia >= 21 && mes === 4 || dia <= 20 && mes === 5) {
//     alert("Su signo es Tauro!");
// } else if (dia >= 21 && mes === 5 || dia <= 21 && mes === 6) {
//     alert("Su signo es Géminis!");
// } else if (dia >= 22 && mes === 6 || dia <= 22 && mes === 7) {
//     alert("Su signo es Cáncer!");
// } else if (dia >= 23 && mes === 7 || dia <= 23 && mes === 8) {
//     alert("Su signo es Leo!");
// } else if (dia >= 24 && mes === 8 || dia <= 22 && mes === 9) {
//     alert("Su signo es Virgo!");
// } else if (dia >= 23 && mes === 9 || dia <= 22 && mes === 10) {
//     alert("Su signo es Libra!");
// } else if (dia >= 23 && mes === 10 || dia <= 22 && mes === 11) {
//     alert("Su signo es Escorpio!");    
// } else if (dia >= 23 && mes === 11 || dia <= 21 && mes === 12) {
//     alert("Su signo es Sagitario!");    
// } else if (dia >= 22 && mes === 12 || dia <= 20 && mes === 1) {
//     alert("Su signo es Capricornio!"); 
// } else if (dia >= 21 && mes === 1 || dia <= 19 && mes === 2) {
//     alert("Su signo es Acuario!");
// } else if (dia >= 20 && mes === 2 || dia <= 20 && mes === 3) {
//     alert("Su signo es Piscis!");
// } else {
//     alert("El dato ingresado no es válido!!");
// }






// ********** Bonus 3 **********
// Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.

let nombre = prompt("Por favor, ingrese su nombre:");
let hora = parseInt(prompt("Por favor, ingrese la hora en formato 24 hrs. y no incluya los minutos:"));
if (hora >= 12 && hora < 19) {
    alert("Buenas tardes" + " " + nombre + "!");
} else if (hora >= 19 && hora <= 24 || hora >= 1 && hora < 5 ) {
    alert("Buenas noches" + " " + nombre + "!");
} else if (hora >= 5 && hora < 12) {
    alert("Buenos días" + " " + nombre + "!");
} else {
    alert("El dato ingresado no es válido");
}










