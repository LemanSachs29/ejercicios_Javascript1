/** Descripción: Implementa una función que reciba un array de números y calcule el
promedio y la mediana. Usa una función sort para ordenar los números antes de
calcular la mediana.
● Requisitos:
○ Usa una estructura de control if-else para manejar arrays con un número
par o impar de elementos.
○ Utiliza una función para calcular el promedio y otra para la mediana.
● Objetivo: Trabajar con arrays, funciones y algoritmos de ordenamiento.*/

//Función para calcular el promedio
function calcPromedio ($numeros){
var $sumatorio = 0;
    //Recorrer el array para conocer la suma de términos
  for(let i = 0; i<=$numeros.length-1; i++){
    $sumatorio += $numeros[i];
  }
  //Devolvemos la suma de términos entre el número de términos
  return $sumatorio / $numeros.length;
}S


//Función para calcular la mediana
function calcMediana($numeros){
    let promedio = 0;

    //Ordenamos el array de menor a mayor
    $numeros = $numeros.sort();

    //Mediana con un número de elementos par
    if($numeros.lenght / 2 == 0){
        promedio = ($numeros[$numeros.length/2] + 
          $numeros[($numeros.length/2)+1])/2;

    //Mediana si el número de términos es impar
    }else{
        promedio = $numeros[$numeros.length/2];
    }

    return promedio;
}


//Declaración de arrays para probar las funciones:
$arrayPar = new Array (10, 2, 7, 8, 3, 4, 5, 6, 1, 9);
$arrayImpar = new Array (10, 2, 7, 8, 3, 4, 5, 6, 1, 9, 11);

//Casos de prueba: 
console.log("El promedio del array par es " + calcPromedio($arrayPar)); //5.5
console.log("El promedio del array impar es " + calcPromedio($arrayImpar));//6
console.log("La mediana del array par es " + calcPromedio($arrayPar));//5.5
console.log("La mediana del array impar es " + calcPromedio($arrayImpar));//6
