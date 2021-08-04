function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let porcentajeCepa;
    let mayorEdadContagiado;
    let cantidadArgentinos=0;
    let flag=1;
    let contadorAlfa=0;
    let contadorDelta=0;
    let contadorBeta=0;
    let contadorPositivos=0;
    let contadorNegativos=0;
    let porcentajeNegativos;
    let porcentajePositivo;

    for(let i=0; i<2 ; i++){
        nacionalidad=prompt("Ingrese la nacionalidad(argentina/extranjera)").toLowerCase();
        while(nacionalidad!="argentina" && nacionalidad!="extranjera"){
            nacionalidad=prompt("Error. Ingrese una nacionalidad valida(Argentina/extranjera)").toLowerCase();
        }
        resultado=prompt("Ingrese el resultado del hisopado(negativo/positivo)").toLowerCase();
        while(resultado!="negativo" && resultado!="positivo"){
            resultado=prompt("Error. Ingrese el resultado del hisopado(negativo/positivo)").toLowerCase();
        }
        edad=parseInt(prompt("Ingrese su edad. (Entre 18 y 65)"));
        while(isNaN(edad)||edad<18 || edad>65){
            edad=parseInt(prompt("Error. Ingrese una edad valida(entre 18 y 65)"));
        }
        if(resultado=="negativo"){
            cepa=prompt("Ingrese la cepa (en caso de un resultado negativo ingrese 'ninguna)'").toLowerCase();
            while(cepa!="ninguna"){
                cepa=prompt("Error. Si su resultado fue negativo ingrese 'ninguna'").toLowerCase();
            }
        }
        else{
            cepa=prompt("Ingrese la cepa(delta/alfa/beta)").toLowerCase();
            while(cepa!="delta" && cepa!="alfa" && cepa!="beta"){
                cepa=prompt("Error.Ingrese la cepa(delta/alfa/beta)").toLowerCase();
            }
        }
        switch(cepa){
            case "delta":
                contadorDelta++;
                if(nacionalidad=="argentina"){
                    cantidadArgentinos++;
                }
                break;
            case "alfa":
                contadorAlfa++;
                break; 
            default:
                contadorBeta++;
                break;     
        }
        if(resultado=="positivo"){
            contadorPositivos++;
        }
        else{
            contadorNegativos++;
        }

      
        if(nacionalidad=="extranjera"){
            if(flag==1||mayorEdadContagiado<edad){
                mayorEdadContagiado=edad;
                flag=0;
            }
        }

    }
    //a
    porcentajePositivo=(contadorPositivos*100)/8;
    if(porcentajePositivo>0){
    alert("El porcentaje de positivos es " + porcentajePositivo + " %");
    }
    else{
        alert("No hubo resultados positivos");
    }
    //b
    porcentajeNegativos=(contadorNegativos*100)/8;
    if(porcentajeNegativos>0){
        alert("El porcentaje de negativos es " + porcentajeNegativos + " %");
    }
    else{
        alert("No hubo resultados negativos");
    }
    //c
    if(contadorAlfa>contadorBeta && contadorAlfa>contadorDelta){
        alert("La cepa mas encontrada es la Alfa");
    }
    else if(contadorBeta>contadorAlfa && contadorBeta>contadorDelta){
        alert("La cepa mas encontrada es la Beta");
    }
    else{
        alert("La cepa mas encontrada fue la Delta");
    }
    //d
    if(mayorEdadContagiado>0){
    alert("La edad del mayor extranjero contagiado es " + mayorEdadContagiado);
    }
    else{
        alert("No hubo extranjeros contagiados");
    }
    //e
    alert("La cantidad de personas argentinas contagiadas con la delta es " + cantidadArgentinos);

}
