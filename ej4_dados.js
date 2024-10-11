/**
 * ● Descripción: Crea una función que simule el lanzamiento de dos dados (números
aleatorios entre 1 y 6). El programa debe contar cuántas veces se obtiene un total de
7 al lanzar los dados 100 veces.
● Requisitos:
○ Usa un bucle for para realizar las simulaciones.
○ Utiliza Math.random() para generar los números aleatorios.
○ Usa una función para encapsular la lógica del lanzamiento de dados.
● Objetivo: Trabajar con números aleatorios, bucles y funciones. */


//Función que utiliza el método random para simular una tirada de un dado de 6 caras
function dado(){
    return Math.floor(Math.random() * 6) + 1;
}

/**Función que lanza 2 dados 100 veces y devuelve el número de ocasiones en la que 
 * el la suma de los resultados es igual a 7.*/

function lanzaDados(){
    //Inicialización de un contador
    var cuenta7 = 0;

    //100 tiradas
    for(let i = 0; i<=100; i++){
        
        //Si las tiradas suman 7, suma 1 al contador
        if (dado() + dado() == 7){
            cuenta7 ++;
        }
    }
    return cuenta7;
}

//Main

let vecesSumado7 = lanzaDados();
console.log("Los dados han sumado 7 en " + vecesSumado7 + " ocasiones.")
