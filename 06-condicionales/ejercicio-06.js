'user strict'

// Condicional if
// Si A es igual a B entonces haz algo.

/*

- Operadores Relacionales:

  * Mayor: >
  * Menos: <
  * Mayor o igual: >=
  * Menor o igual: <=
  * Igual: ==
  * Distinto: !=

*/

var edad1 = 30;
var edad2 = 12;


// Si pasa esto
if(edad1 > edad2){
// Ejecuta esto
console.log("Edad uno es mayor que edad dos.")
}else{
    console.log("La edad uno es inferior.")
}

//////////////////////////////////////////////////////////////

var edad = 34;
var nombre = "David Suarez";

if(edad >= 18){
// Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    // Esto es un condicional anidado, es decir, un if dentro de otro if.
    if(edad <= 33){
        console.log("Todavía eres millennial");
    }else{
        console.log("Ya no eres millennial.")

    // En caso de necesitar otra condicional, se puede utilizar "else if"
    /* 
    }else if(edad >= 70){
        console.log("Eres anciano.")
    }else{
        console.log("Ya no eres millennial");
    */
}
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/*
// Operadores lógicos

AND(Y): &&
OR(O): ||
Negación: !
*/

// NEGACIÓN

var year = 2018;
if(year != 2016){
console.log("El año no es 2016, realmente es "+year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR

/*

if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}

*/

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else {
    console.log("AÑO NO REGISTRADO.");
}