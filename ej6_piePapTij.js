/**● Descripción: Implementa el clásico juego de "Piedra, Papel o Tijeras" donde
 * el usuario juega contra la computadora. Usa prompt para recibir la jugada 
 * del usuario y Math.random() para la jugada de la computadora.
● Requisitos:
○ Usa una función switch para determinar el ganador.
○ Controla la lógica de empate, victoria y derrota con una estructura if-else.
○ Añade validaciones para entradas incorrectas.
● Objetivo: Usar funciones, estructuras de control y manejo de entradas 
aleatorias. */

//Entorno
let jugada ;
let jugadaCPU;
var resultado;

//Algoritmo:
do{
    jugada = parseInt(prompt("1. Piedra \n 2. Papel \n 3.Tijeras"));
}while(jugada != 1 && jugada != 2 && jugada != 3);

//Generamos un número aleatorio entre 1 y 3 para simular la jugada de la cpu.
jugadaCPU = Math.floor(Math.random() * 3) + 1; 

switch(jugada){
    case 1:
        if(jugadaCPU == 1){//Piedra vs Piedra
            resultado = "Empate";
        }else if(jugadaCPU == 2){//Piedra vs Papel
            resultado = "Cpu Gana";
        }else{//Piedra vs Tijeras
            resultado = "Jugador Gana";
        }
    break;
    case 2:
        if(jugadaCPU == 1){//Papel vs Piedra
            resultado = "Jugador Gana";
        }else if(jugadaCPU == 2){//Papel vs papel
            resultado = "Empate";
        }else{//Papel vs Tijeras
            resultado = "Cpu Gana";
        }
    break;
    case 3:
        if(jugadaCPU == 1){//Tijeras vs Piedra
            resultado = "Cpu Gana";
        }else if(jugadaCPU == 2){//Tijeras vs Papel
            resultado = "Jugador Gana";
        }else{//Tijeras vs Tijeras
            resultado = "Empate";
        }  
    break;
}


console.log("Resultado: " + resultado);
