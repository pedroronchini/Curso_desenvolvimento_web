/* Percorrendo Arrays com for
var lista_frutas = Array();
var y;

lista_frutas[0] = "Banana";
lista_frutas[1] = "Maçã";
lista_frutas[2] = "Morango";
lista_frutas[3] = "Uva";

console.log(lista_frutas)

for(y = 0; y < lista_frutas.length; y++) {
    document.write(lista_frutas[y] + "<br />");
}

*/
/* Tabuada com while */
var y = 1;

while(y <= 10){
    var x = 1;

    while(x <= 10) {
        document.write(y + " x " + x + " = " + (y * x) + "<br />");
        x++;
    }
    y++;
    document.write("<hr />");
}

