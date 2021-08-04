function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let costoTotal=0;
	let costoConDescuetno;
	let flag=1;
	let mayorCantidad=0;
	let mayorOrigen;
	let promedioVacunasAsia;
	let contadorVacunasAsia=0;
	let cantidadDevuelosAsia=0;
	let cantidadTotal=0;
	


	for(let i=0; i<2 ; i++){
		origen=prompt("Ingrese el origen del vuelo(asia/europa/usa)").toLowerCase();
		while(origen!="asia" && origen!="europa" && origen!="usa"){
			origen=prompt("Error. Ingrese el origen del vuelo(asia/europa/usa)").toLowerCase();
		}
		cantidad=parseInt(prompt("Ingrese la cantidad de vacunas(mayor a 0)"));
		while(isNaN(cantidad)||cantidad<0){
			cantidad=parseInt(prompt("Error. Ingrese la cantiadad de vacunas(Mayor a 0)"));
		}
		costo=parseFloat(prompt("Ingrese el costo del vuelo(entre 1 millon y 5 millones de pesos)"));
		while(isNaN(costo)||costo<1000000 || costo>5000000){
			costo=parseFloat(prompt("Error. Ingrese un costo valido entre 1 millon y 5 millones"));
		}
		if(flag==1||mayorCantidad<cantidad){
			mayorCantidad=cantidad;
			mayorOrigen=origen;
			flag=0;
		}
		if(origen=="asia"){
			contadorVacunasAsia=contadorVacunasAsia+cantidad;
			cantidadDevuelosAsia++;
		}

		costoTotal=costoTotal+costo;
		cantidadTotal=cantidadTotal+cantidad;


	}
//a 
    alert("El origen que envio mayor cantidad de vacunas es " + mayorOrigen); 

//b
	promedioVacunasAsia=contadorVacunasAsia/cantidadDevuelosAsia;
	if(promedioVacunasAsia>0){
		alert("El promedio de vacunas llegadas de Asia es de " + promedioVacunasAsia + " por vuelo");
	}
	else{
		alert("No llegaron vacunas de Asia");
	}
//c
    alert("El costo total sin descuetno es de " + costoTotal);
//d
    if(cantidadTotal>=4000000){
		costoConDescuetno=costoTotal*0.70;
		alert("Hubo un descuento del 30%, el costo final con el descuento es de " + costoConDescuetno);
	}
	else if(cantidadTotal>=2000000 && cantidadTotal<4000000){
		costoConDescuetno=costoTotal*0.80;
		alert("Hubo un descuento del 20%, el costo final con el descuento es de " + costoConDescuetno);
	}
	else{
		alert("No hubo ningun descuento, el total a pagar es " + costoTotal);
	}
}
