//mostrar los números en el div.
let screen="";
let signtype="";
let num1=0;
let num2=0;

function imp(n){
	screen+=n;
	document.getElementById("answer").innerHTML=screen;
}

//limpiar números de la pantalla cuando presiono signos y guardar valor.
function limpiar(p){
	signtype=p;
	//cambio valor texto a valor número.
	num1=Number(screen);
	document.getElementById("answer").innerHTML=num1;
	screen="";
	
}

function res(){
	num2=Number(screen);
	document.getElementById("answer").innerHTML=num2;
	screen="";
	
	let claseoperation= new operation(num1,num2);
	console.log(signtype);
//botón igual presionado
	switch(signtype){
		case "+":
		claseoperation.sumar().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "-":
			claseoperation.restar().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "*":
			claseoperation.multi().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "/":
			claseoperation.div().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		default:
		console.log("default");
		break;
	} 

}


class operation{
	constructor(num1,num2){
		this.number1=num1;
		this.number2=num2;
	}
	sumar(){
		var objetoaenviar = this;
		//regresa la promesa
		return new Promise(function(resolve, reject){
			//do xhr stuff

			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	restar(){
		var objetoaenviar = this;
		//regresa la promesa
		return new Promise(function(resolve, reject){
			//do xhr stuff

			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	multi(){
		var objetoaenviar = this;
		//regresa la promesa
		return new Promise(function(resolve, reject){
			//do xhr stuff

			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	div(){
		var objetoaenviar = this;
		//regresa la promesa
		return new Promise(function(resolve, reject){
			//do xhr stuff

			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}
