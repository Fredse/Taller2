function Success(numSerie){
    num = numSerie.slice(-2);
    if (num <= 10 ){
        alert("Numero correcto, Atraco exitoso hemos despegado");
    }else{
        alert("Numero Incorrecto, Mision fallida hemos fracasado");
    }
}

function validation(callback){
    var plane = new Object();
    plane.numSerie = prompt("Digite los 8 numeros de serie del plano");

    callback(plane.numSerie);
}

validation(Success);