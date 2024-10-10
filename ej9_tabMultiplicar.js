let numero;

function mutiplicationTable(num, lim = 10){


    num = parseInt(num);
    
    if(num == NaN){
        throw new TypeError("Valor del parámetro no válido.");
    }else if(lim == NaN || lim <= 0 ){
        lim = 10;
    }

    for(let i = 1; i<=lim; i++){
        console.log(num + " X " + i + " = " + num*i);
    }
}

try{
numero = prompt("Número");
lim = prompt("Límite (opcional)")
mutiplicationTable(numero, lim);

}catch(e){
    console.log(e.message);
}

