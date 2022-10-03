function getMam (x, y, z){

    if (x > y && x > z){
        console.log(x , " es el mayor");
    }else if(y > x && y > z){
        console.log(y , " es el mayor");
    } else { 
        console.log(z, " es el mayor");
    }
}

getMam(1,50,8)


function signo(num){
    if(num < 0){
        console.log("Es negativo");
    }else if(num > 0){
        console.log("Es positivo")
    }else{
        console.log("Es igual a 0")
    }
}

signo(4)
signo(-6)
signo(0)


var postulante = {
    nombre: "Lina Lavarello",
    cant_preguntas: 25,
    cant_preguntas_correctas: 23
};

porcetajeDeRespuestas = (postulante.cant_preguntas_correctas / postulante.cant_preguntas) * 100;

if(porcetajeDeRespuestas >= 90){
    console.log("Nivel superior");
}else if(porcetajeDeRespuestas >= 75 && porcetajeDeRespuestas < 90){
    console.log("Nivel medio");
}else if(porcetajeDeRespuestas >= 50 && porcetajeDeRespuestas < 75){
    console.log("Nivel regular");
}else {
    console.log("Fuera de nivel");
}

console.log(postulante);