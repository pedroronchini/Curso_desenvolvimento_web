/*****************************************************************
Array Básico
// var lista_frutas = Array();

var lista_frutas  = [];

lista_frutas[5] = "Banana";
lista_frutas[6] = "Maçã";
lista_frutas["x"] = "Morango";
lista_frutas[8] = "Uva";


//var lista_frutas = Array("Banana", "Maçã", "Morango", "Uva");
//var lista_frutas = ["Banana", "Maçã", "Morango", "Uva"];

console.log(lista_frutas);
*/

/******************************************************************
Array Multidimensional
var lista_coisas = Array();

lista_coisas["frutas"] = Array("Banana", "Maçã", "Morango", "Uva");
lista_coisas["pessoas"] = [];

lista_coisas["pessoas"]["a"] = 'João';
lista_coisas["pessoas"]["b"] = 'José';
lista_coisas["pessoas"]["c"] = 'Maria';
/*
lista_coisas["frutas"][1] = "Banana";
lista_coisas["frutas"][2] = "Maçã";
lista_coisas["frutas"][3] = "Morango";
lista_coisas["frutas"][4] = "Uva";


console.log(lista_coisas["pessoas"]['b']);*/
/******************************************************************
Array - Métodos de inclusão e exclusão de elementos
var lista_coisas = Array();

lista_coisas["frutas"] = Array();
lista_coisas["pessoas"] = [];

lista_coisas["frutas"].push("Banana");
lista_coisas["frutas"].push("Uva");

//lista_frutas[0] = "Banana";
//lista_frutas[1] = "Maçã";

// Incluir elemento no final do array
//lista_frutas.push("Uva");

// Incluir elemento no inicio do array
//lista_frutas.unshift("Uva");

// Excluir elemento do final do array 
//lista_frutas.pop();

// Excluir elemento do incio do array
//lista_frutas.shift();

console.log(lista_coisas);*/
/******************************************************************
Array - Método de pesquisa
var lista_frutas = Array();

lista_frutas[0] = "Banana";
lista_frutas[1] = "Maçã";
lista_frutas[2] = "Morango";
lista_frutas[3] = "Uva";

var auxiliar = lista_frutas.indexOf("Banana");

if(auxiliar === -1) {
    console.log("Elemento não existe");
}else{
    console.log("Elemento existe e está na posição " + auxiliar);
}
*/
/******************************************************************
Array - Ordenação de elementos
var lista_frutas = Array();

lista_frutas[0] = "Maçã";
lista_frutas[1] = "Uva";
lista_frutas[2] = "Banana";
lista_frutas[3] = "Morango";

console.log(lista_frutas.sort());*/

var lista_numeros = Array();

lista_numeros[0] = 12;
lista_numeros[1] = 40;
lista_numeros[2] = 3;
lista_numeros[3] = 7;
lista_numeros[4] = 19;
lista_numeros[5] = 1;

console.log(lista_numeros.sort(ordenaNumeros));

function ordenaNumeros(a, b) {
    return a - b;
    // < 0 = a ordenado antes de b
    //> 0 = b ordenado antes de a
    // == ordem é mantida
}