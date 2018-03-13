//Script de generador aleatorio de cartas
//Son cuatro palos los cuales poseen una figura diferente y cada palo posee 13 naipes con valores del 1 al 13
//Siendo un total de 52 cartas
//Los valores 1, 11, 12 y 13 son sustituidos por las letras A, J, Q y K respectivamente



let palo = ["♦", "♥", "♠", "♣"];

// ♦ diamantes = 0, ♥ corazones = 1, ♠ picas = 2, ♣ trébol = 3

console.log(palo);

//Se tienen que generar dos números aleatorios, uno para el palo y otro para el valor de la carta

//Número aleatorio del palo

let paloNumber = Math.floor(Math.random()*palo.length);

console.log(paloNumber);

//Palo aleatorio

let paloRandom = palo[paloNumber];

console.log(paloRandom);


//Número aleatorio del valor de la carta, debe ser del 1 al 13

let valorCarta = Math.floor(Math.random()*12+1);

console.log(valorCarta);



//Condicionales para valores con letras

if (valorCarta === 1){
	valorCarta = "A";
}

if (valorCarta === 11){
	valorCarta = "J";
}

if (valorCarta === 12){
	valorCarta = "Q";
}

if (valorCarta === 13){
	valorCarta = "K";
}

//Cambio de color a rojo para el caso de Diamantes y Corazones

if (paloNumber === 0 || paloNumber === 1) {
	document.getElementById("valorSuperior").style.color = 'red';
	document.getElementById("paloSuperior").style.color = 'red';
	document.getElementById("valorInferior").style.color = 'red';
	document.getElementById("paloInferior").style.color = 'red';
	document.getElementById("centroCarta").style.color = 'red';
}

//Instertar los valores en el HTML de la carta

document.getElementById("valorSuperior").innerHTML = valorCarta;
document.getElementById("paloSuperior").innerHTML = paloRandom;
document.getElementById("valorInferior").innerHTML = valorCarta;
document.getElementById("paloInferior").innerHTML = paloRandom;
document.getElementById("centroCarta").innerHTML = paloRandom;


