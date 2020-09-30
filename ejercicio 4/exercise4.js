function validar(age){
    if(age < 15){
        alert("Manejo de la fuerza");
    }else{
        if(age > 15){
            alert("Manejo del sable de luz");
        }
    }
}

function Person(callback){
    var padawan = new Object();
    padawan.name = prompt('indique el nombre');
    padawan.planet =  prompt('indique su  planeta');
    padawan.age = prompt('indique su edad');
    padawan.stature = prompt('indique su estatura');
    callback(padawan.age);
}

Person(validar);