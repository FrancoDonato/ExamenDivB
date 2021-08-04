
function mostrar()
{
	let nombre;
	let edad;
    let vacuna;
    let dosis;
    let sexo;
	let respuesta;
	let contadorEdad=0;
	let contadorRusa=0;
	let contadorChina=0;
	let contadorAmericana=0;
	let promedioEdad;
	let nombreMasEdad;
	let vacunaMasEdad;
	let edadMasGrande=0;
	let flag=1;
	let mayoresDeEdad=0;
	let porcentajeMayores;
	let segundaDosis=0;
	let vacunasTotales=0;
	let porcentajeSegundaDosis




	do{
		nombre=prompt("Ingrese el nombre de la persona vacunada");
		while(nombre.length<3 || nombre.length>10){
			nombre=prompt("Error. Ingrese el nombre de la persona vacunada");
		}
		edad=parseInt(prompt("Ingrese la edad del paciente(Mayor o igual a 12)"));
		while(isNaN(edad)|| edad<12){
			edad=parseInt(prompt("Error. Ingrese la edad con un numero superior o igual a 12"));
		}
		if(edad>=12 && edad<=17){
		vacuna="americana";
		}
		else{
			vacuna=prompt("Ingrese la vacuna que ha sido utilizada(rusa/china/americana)").toLowerCase();
		while(vacuna!="rusa" && vacuna!="china" && vacuna!="americana"){
			vacuna=prompt("Error. Ingrese una vacuna valida(rusa/china/americana)").toLowerCase();
		} 
	     }
	
		dosis=prompt("Ingrese si es la primera o segunda dosis(p/s)").toLowerCase();
		while(dosis!="p" && dosis!="s"){
			dosis=prompt("Error. Ingrese 'p' para la primer dosis y 's' para la segunda").toLowerCase();
		}
		sexo=prompt("Ingrese el sexo del paciente(f/m)").toLowerCase();
		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Error. Ingrese un sexo valido (f/m)").toLowerCase();
		}
		switch(vacuna){
			case "rusa":
				contadorRusa++;
				contadorEdad=contadorEdad+edad
				break;
			case "china":
				contadorChina++;
				break;
			default:
				contadorAmericana++;
				if(edad>=18){
					mayoresDeEdad++;
				}
				break;	

		}
		if(sexo=="f"){
			if(flag==1 || edadMasGrande<edad){
				edadMasGrande=edad;
				nombreMasEdad=nombre;
				vacunaMasEdad=vacuna;
				flag=0;
			}
		}

		vacunasTotales++;
		if(dosis=="s"){
			segundaDosis++;
		}

		respuesta=prompt("Quiere agregar mas personas al registro?(s/n)").toLowerCase();
		while(respuesta!="s" && respuesta!="n"){
			respuesta=prompt("Error. Quiere agregar mas personas al registro?(s/n)").toLowerCase();
		}
	}while(respuesta=="s");
//a
	promedioEdad=contadorEdad/contadorRusa;
	if(promedioEdad>0){
	alert("El promedio de edad de la gente que uso la vacuna rusa es " + promedioEdad)
	}
	else{
		alert("Nadie uso la vacuna rusa");
	}
//b	
	alert("La mujer con mayor edad se llama " + nombreMasEdad + " y uso la vacuna " + vacunaMasEdad);
//c
	porcentajeMayores=(mayoresDeEdad*100)/contadorAmericana;
	if(porcentajeMayores>0){
	alert("El porcentaje de mayores de edad con la vacuna americana es " + porcentajeMayores + " %");
	}
	else{
		alert("Ningun mayor de edad uso la americana");
	}
//d
    porcentajeSegundaDosis=(segundaDosis*100)/vacunasTotales;
	if(porcentajeSegundaDosis>0){
	alert("El porcentaje de vacunados con la segunda dosis es de " + porcentajeSegundaDosis + " %");
	}
	else{
		alert("Nadie se vacuno con la segunda dosis");
	}
//e  
    if(contadorAmericana<contadorChina && contadorAmericana<contadorRusa){
		alert("La vacuna menos inoculada es la americana");
	}	
	else if(contadorChina<contadorAmericana && contadorChina<contadorRusa){
		alert("La vacuna menos inoculada es la china");
	}
	else{
		alert("La vacuna menos inoculada es la rusa");
	}


}
