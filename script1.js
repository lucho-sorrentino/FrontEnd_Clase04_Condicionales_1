// Algoritmo “Adiviná el número”

// 1 - Elegir y guardar un número al azar (entre 1 y 100)
// 2 - Pedirle al usuario que ingrese un número
// 3 - Sumar uno en cantidad de intentos 
// 4 - Si el número ingresado es igual al pensado 
// 	Informar “Ganaste” y Terminar 
// Si el número ingresado es mayor al pensado
// 	Informar “Es mayor”
// Si el número ingresado es menor al pensado
// 	Informar “Es menor”


let num = 88;
let adivina = parseInt(prompt("Ingrese un numero del 1 a al 100"));
let cantInt = 0;
if (adivina === num){
    alert("Ganaste");
} else if (adivina>num) {
    alert("Es mayor");
} else (adivina<num) 
    alert("Es menor");


