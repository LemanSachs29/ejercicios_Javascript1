let numero;

function mutiplicationTable(num, lim = 10){

    //if(num == Nan){
    if(Number.isNaN(num)){
        throw new TypeError("Valor del parámetro no válido.");
    }else if(Number.isNaN(lim) || lim <= 0 ){
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

