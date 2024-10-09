/**
Descripción: Crea una función que convierta una temperatura dada en grados
Celsius a Fahrenheit y viceversa. Usa el parámetro de una función para determinar
la dirección de la conversión.
● Requisitos:
○ Usa switch para elegir entre las conversiones.
○ Utiliza typeof para verificar que las entradas sean números.
○ Añade manejo de errores para valores no válidos usando try...catch.
● Objetivo: Trabajar con parámetros, manejo de tipos y estructuras de control.
*/

let opcion = 1;
let temperatura;
let temp_fin;
let msg;


/*La función recibe dos parámetros:
    opcion: 1 Para pasar Celsius a Fahrenheit. 2 Para pasar de Fahrenheit a celsius.
    temperatura: temperatura a convertir. Debe ser un número.
    Thows: TypeError si alguno de los parámetros es no numérico. RangeError si el
    parámetro opción es distinto a 1 o 2.
*/


//100 Grados Celsisus =  212 Fahrenheit
//100 Grados Fahrenheit = 37.7778 Celsius
function farAndCelConversor(opcion, temperatura){
var conversion = null;
            if (typeof(opcion)!="number" || typeof(temperatura) != "number"){
                throw new TypeError("Se esparaba un número");
            }else if(opcion != 1 && opcion != 2){
                throw new RangeError("Opción fuera de rango");
            }
                switch (opcion){
                    case 1:
                         //Convertir celsius a fahrenheit 100 -> 212
                         conversion = (temperatura - 32) / 1.8;
                    case 2:
                        //Convertir fahrenheit a celsius 100 -> 37.77778
                        conversion = temperatura * 1.8 +32;
                }
                return conversion;
}


while(opcion != 3){
    try{
        opcion = parseFloat(prompt("1 Convertir Celsisus a Fahrenheit \n 2. Convertir Fahrenheit a Celsius \n 3. Salir"));
        temp_inic = parseFloat(prompt("temperatura"));
        temp_fin = farAndCelConversor(opcion, temp_inic);
        if(opcion == 1){
            msg = " Fahrenheit";
        }else{
            msg = " Celsisus";
        }
        console.log(temp_fin + msg);
        opcion = 3;
    }catch(error){
        if(error instanceof TypeError){
            console.log(TypeError.message);
        }else if(error instanceof RangeError){
            console.log(RangeError.message);
        }
    }
}