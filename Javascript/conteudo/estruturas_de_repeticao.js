/*************************************
While

var x = 1;

document.write("inicio <br/>");

while(x <= 10) {

    x++;
    if( x === 5) {

        continue;
    }

    document.write(x + "<br />");


    
}

document.write("fim <br />");
*/

/*****************************************
Do While

var x = 11;

do{
    document.write(x + "<br />");

}while(x <= 10)
*/
/******************************************
For

for(var x = 10; x >= 0; x-= 4) {
    document.write(x + "<br />");
}
*/
/******************************************
For in

//var listaConvidados = ["Jorge", "Jamilton", "José", "Ana", "Maria"];
var listaConvidados = Array();

listaConvidados["a"] = "Jorge";
listaConvidados[10] = "Jamilton";
listaConvidados["zebra"] = "José";
listaConvidados[-1] = "Ana";
listaConvidados[true] = "Maria";

console.log(listaConvidados);

for(var x in listaConvidados) {
    console.log("Índice " + x + " valor " + listaConvidados[x]);
}
*/
/********************************************
Foreach
*/
//var listaFuncionarios = ["Viviane", "Rosângela", "Miguel", "Lucas", "Fernanda"];
var listaFuncionarios = Array();

listaFuncionarios["x"] = "Viviane";
listaFuncionarios[false] = "Rosângela";
listaFuncionarios[3] = "Miguel";
listaFuncionarios[27] = "Lucas";
listaFuncionarios[-12] = "Fernanda";

var f = function(valor, indice){
    console.log(valor, indice);
}

listaFuncionarios.forEach(f);

/* Primeiro Exemplo
console.log(listaFuncionarios);
document.write(listaFuncionarios[3]);

listaFuncionarios.forEach(function(valor, indice, array) {
    // Lógica
    console.log("indice " + indice + " | valor: " + valor);
    
    if(valor == "Lucas"){
        array[indice] = "Um novo valor";
    }

})

console.log(listaFuncionarios);
document.write("<br />");
document.write(listaFuncionarios[3]);
*/