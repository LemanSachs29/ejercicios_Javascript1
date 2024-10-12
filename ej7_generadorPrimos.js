/**● Descripción: Escribe una función que reciba un número y devuelva un array 
 * con
todos los números primos menores o iguales a ese número.
● Requisitos:
○ Usa un bucle anidado para comprobar si un número es primo.
○ Usa una estructura for o while para iterar sobre los números.
○ Utiliza una función isPrime() para verificar si un número es primo.
● Objetivo: Trabajar con bucles anidados y funciones para resolver un problema
matemático. */



/**Función que recibe un número y devuelve true o false si el número es primo.
 * Para ello busca un divisor entre 2 y la raíz del número.*/
function isPrime(num){
    
    var esPrimo = true;
    /**No existen números entre 1 y 2, por lo que si el parámetro es dos, este
     * proceso es innecesario*/
    if(num != 2){
        var contador = 2;
        /**El número será primo si todas las divisiones hasta su raiz 
         * resultan en resto 0 */
        do{
            esPrimo = num%contador != 0;
            contador++;
        }while(esPrimo && contador<=Math.sqrt(num))
    }
    //Devolvemos el resultado;
    return esPrimo;
}


//Pedimos el número
var numeroLimite = prompt("Introduzca un número");

//Verificamos desde 2 (primer número primo) todos los números hasta el límite.
for(let i=2; i<=numeroLimite; i++){
    if(isPrime(i)){
        console.log(i);
    }
}



